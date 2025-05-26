#include <stdio.h>

int main(){
    int nums[4], num = 0 ;
    
    scanf("%d %d %d %d", &nums[0], &nums[1] , &nums[2] , &nums[3]) ;

    for(int i = 0 ; i < 4 ; i ++){
        int aps = 0; 
        for(int j = i + 1 ; j < 4 ; j++ ){
            if(nums[i] == nums[j]) { 
                num++; 
                break; 
            }
        }
    }

    printf("%d\n", num);
    return 0;
}

/*
#include <stdio.h>
#include <glib.h>

int main() {
    int nums[4], num = 0;
    GHashTable *seen = g_hash_table_new(g_int_hash, g_int_equal); // Mapa de enteros

    for (int i = 0; i < 4; i++) {
        scanf("%d", &nums[i]);
        if (g_hash_table_contains(seen, &nums[i])) {
            num++;
        } else {
            g_hash_table_insert(seen, &nums[i], GINT_TO_POINTER(1));
        }
    }

    printf("%d\n", num);
    g_hash_table_destroy(seen); // Liberar memoria
}


*/