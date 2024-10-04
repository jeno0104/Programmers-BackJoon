function solution(s) {
    var answer = '';
    let newSValue = s.split(" ");
    
    for(let values of newSValue){
        for(let i = 0; i < values.length; i++){
            if(i % 2 === 0){
                answer += values[i].toUpperCase();
            }
            else{
                answer += values[i].toLowerCase();
            }
        }
        answer += " "
        
            
    }
    return answer.slice(0, answer.length - 1);
}