// importa módulos de sistema de archivos y rutas
const fs = require('fs') ;
const path = require('path') ;

const ROOT = path.join(__dirname, '..', 'soluciones') ; // carpeta a escanear
const OUT_FILE = path.join(__dirname, '..', 'soluciones.json') ; // JSON resultante

const entradas = [] ;

// Función recursiva para leer carpetas
function escanDir(dir) {
  const objetos = fs.readdirSync(dir) ;

  objetos.forEach(objetos => {
    const rutaComp = path.join(dir, objetos) ;
    const stat = fs.statSync(rutaComp) ;

    if (stat.isDirectory()) {
      // si es carpeta, entramos dentro
      escanDir(rutaComp) ;

    } else if (objetos.endsWith('.c')) {
      // si es .c, leemos su contenido
      const texto = fs.readFileSync(rutaComp, 'utf-8') ;

      // buscamos el bloque /** ... */
      const bloque = texto.match(/\/\*\*([\s\S]*?)\*\//) ;
      const meta  = { id: path.basename(objetos, '.c'), title: '', tags: [] } ;

      if (bloque) {
        // por cada línea dentro del bloque, extraemos clave: valor
        bloque[1].split('\n').forEach(line => {
          const trimmed = line.replace(/^\s*\*\s?/, '').trim() ;
          const [key, ...rest] = trimmed.split(':') ;
          if (!rest.length) return ;

          const value = rest.join(':').trim() ;
          if (key === 'tags') {
            // tags separados por comas
            meta.tags = value.split(',').map(t => t.trim()) ;
          } else if (key === 'title') {
            meta.title = value ;
          } else if (key === 'id') {
            meta.id = value ;
          }
        }) ;
      }

      // ruta relativa para el JSON
      const rutaRel = path
        .relative(path.dirname(OUT_FILE), rutaComp)
        .replace(/\\/g, '/') ;

      // añadimos la entrada completa
      entradas.push({
        id: meta.id,
        title: meta.title,
        tags: meta.tags,
        solution: rutaRel
      }) ;
    }
  }) ;
}

escanDir(ROOT) ;

// 6. escribimos el JSON formateado
//fs.writeFileSync(OUT_FILE, JSON.stringify(entradas, null, 2)) ;

const lines = entradas
  .map(e =>
    '  ' +
    JSON.stringify(e)           // serializa sin saltos
      .replace(/,/g, ' , ')      // espacio tras cada coma
      .replace(/:/g, ' : ')      // espacio tras cada dos puntos
      .replace(/}/g, ' }')
      .replace(/{/g, '{ ')
  )
  .join(',\n') ;

const output = '[\n' + lines + '\n]\n' ; // encierra en corchetes con saltos de línea
fs.writeFileSync(OUT_FILE, output) ;

console.log(`✅ Se generó ${OUT_FILE} con ${entradas.length} entradas.`) ;
