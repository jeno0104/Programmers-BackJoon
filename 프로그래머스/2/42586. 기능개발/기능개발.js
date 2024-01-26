function solution(progresses, speeds) {
    var answer = [];
    let work_end_date = [];
    let number_of_deployment = 1;
    let discrimination = [];
    
    
    for(let i = 0; i < progresses.length; i++){
        work_end_date.push(Math.ceil((100 - progresses[i]) / speeds[i]));
    }
    
    for(let i = 0; i < work_end_date.length; i++){
        discrimination.push(true);
    }
    for(let i = 0; i < work_end_date.length - 1; i++){
        for(let j = i + 1; j < work_end_date.length; j++){
            if(discrimination[i] === false){
                break;
            }
            if(work_end_date[i] >= work_end_date[j] && discrimination[j] !== false){
                number_of_deployment += 1;
                discrimination[j] = false;
            }
            else{
                answer.push(number_of_deployment);
                number_of_deployment = 1;
                discrimination[i] = false;
                break;
            }
            
        }
    }
    answer.push(number_of_deployment);
    
    return answer;
}