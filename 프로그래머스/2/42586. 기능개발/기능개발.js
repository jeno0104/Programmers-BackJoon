function solution(progresses, speeds) {
    var answer = [];
    let lated_date = [];
    let count = 1;
    let pan = [];
    
    
    for(let i = 0; i < progresses.length; i++){
        lated_date.push(Math.ceil((100 - progresses[i]) / speeds[i]));
    }
    
    for(let i = 0; i < lated_date.length; i++){
        pan.push(true);
    }
    for(let i = 0; i < lated_date.length - 1; i++){
        for(let j = i + 1; j < lated_date.length; j++){
            if(pan[i] === false){
                break;
            }
            if(lated_date[i] >= lated_date[j] && pan[j] !== false){
                count += 1;
                pan[j] = false;
            }
            else{
                answer.push(count);
                count = 1;
                pan[i] = false;
                break;
            }
            
        }
    }
    answer.push(count);
    
    return answer;
}