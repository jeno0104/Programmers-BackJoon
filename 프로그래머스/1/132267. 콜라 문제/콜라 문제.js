function solution(a, b, n) {
    var answer = 0;
    if(n < a){
        return answer;
    }
    while(n > a){
        answer += Math.floor(n / a) * b;
        n = n - (Math.floor(n / a) * a) + Math.floor(n / a) * b;
    }
    if(n < a){
        return answer;
    }
    else{
        answer += Math.floor(n / a) * b;
    }
    return answer;
    
}