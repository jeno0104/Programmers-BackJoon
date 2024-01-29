function solution(cards1, cards2, goal) {
    var answer = 'x';
    let length = cards1.length > cards2.length ? cards1.length : cards2.length;
    for(let i = 0; i < goal.length; i++){
        if(cards1[0] === goal[i] || cards2[0] === goal[i]){
            if(cards1 && cards1[0] === goal[i]){
                answer = "o";
                cards1.shift();
            }
            if(cards2 && cards2[0] === goal[i]){
                answer = "o";
                cards2.shift();
            }
        }
        else{
            return "No";
        }
            
    }
    if(answer === "o")
        return "Yes";
}