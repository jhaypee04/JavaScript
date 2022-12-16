function returnAlone(b){
    console.log(b);
    if( b < 0){
        return; // Ends the function and returns undefined
    }else if ( b > 0 ){
        return returnAlone(b - 1); // Ends the function and returns a function call, containing an argument- with a number less than the current value of b ("It re-invokes the function").
    }
}
returnAlone(10);