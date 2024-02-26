function solution(food) {
    var answer = '';
    console.log(Math.floor(food[1] / 2));
    for(let i = 1; i < food.length; i++){
        let jungan = Math.floor(food[i] / 2);
        for(let j = 0; j < jungan; j++){
            answer += i;
        }
        
    }
    answer += "0";
    for(let i = answer.length - 2; i >= 0; i--){
        answer += answer[i];
    }
    
    console.log(answer);
    return (answer);
}