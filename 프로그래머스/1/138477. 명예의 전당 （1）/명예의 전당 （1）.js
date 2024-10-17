function solution(k, score) {
    var answer = [];
    let result = [];
    
    for(let i = 0; i < score.length; i++){
        let flag = true;
        let enter = answer.length === k ? false : true
        for(let j = 0; j < k; j++){
            if(enter){
                answer.push(score[i]);
                result.push(Math.min(...answer));
                break;
            }
            else if(answer[j] <= score[i]){
                answer.push(score[i]);
                answer.sort((a, b) => b - a);
                answer.pop();
                result.push(answer[answer.length - 1]);
                flag = false;
                break;
            }
        }
        if(flag && !enter){
            result.push(answer[answer.length - 1]);
        }
    }
    return result;
}