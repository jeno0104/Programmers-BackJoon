function solution(t, p) {
    var answer = 0;
    let pLen = p.length;
    
    
    for(let i = 0; i <= t.length - pLen; i++){
        let summary = "";
        for(let j = i; j < i + pLen; j++){
            summary += t[j];
        }
        // console.log(summary);
        if(Number(summary) <= Number(p)) answer++;
    }
    return answer;
}