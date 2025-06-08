#include <stdio.h>

int main (){
    int ops = 0;
    
    scanf("%d", &ops);
    int nums [ops] ;

    for(int i = 0 ; i< ops ; i++){
        scanf("%d", &nums[i]);
    }

    for(int i = 0 ; i< ops ; i++){

        int resi = nums[i] % 2020 ;
        int cocien = (nums[i] - resi) / 2020 ; 

        int resp = ( resi > 0 ) ? ( (resi<=cocien) ? 0 : 1 ): 0 ;

        (resp == 0) ? printf("YES\n") : printf("NO\n") ;
    }

    return 0;
}