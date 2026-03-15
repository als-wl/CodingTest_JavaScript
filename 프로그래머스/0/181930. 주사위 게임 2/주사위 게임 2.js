function solution(a, b, c) {
    sum1 = a + b + c;
    sum2 = sum1 * (a**2 + b**2 + c**2);
    sum3 = sum2 * (a**3 + b**3 + c**3);
    
    if(a === b && b === c && c === a){
        return sum3;
    }
    else if(a !== b && b !== c && c !== a){
        return sum1;
    }
    else {
        return sum2;
    }
}