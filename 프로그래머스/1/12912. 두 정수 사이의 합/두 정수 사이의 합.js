function solution(a, b) {
    let answer = 0;
    
    let newA = Math.min(a, b);
    let newB = Math.max(a, b);
    
    console.log(a, b)
    for(let i = newA; i <= newB; i++){
        answer += i;
    }
    return answer;
}