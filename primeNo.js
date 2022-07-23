function prime (number){
    if(number===2){
        return true;
    }
    else if (number <=1){
        return false;
    }
    else{
        for(let i=2 ; i<number ; i++){
            if (number%i===0){
                return false;
            }
        }return true ;
    }
}
