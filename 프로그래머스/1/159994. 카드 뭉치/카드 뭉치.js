function solution(cards1, cards2, goal) {
    var answer = 'x';
    let length = cards1.length > cards2.length ? cards1.length : cards2.length;
    for(let i = 0; i < goal.length; i++){
        if(cards1[0] === goal[i] || cards2[0] === goal[i]){
            if(cards1 && cards1[0] === goal[i]){
                answer = "o";
                console.log("cards1[0] : " + cards1[0] + " goal : " + goal[i]);
                let shift_value = cards1.shift();
                console.log("shift_value = " + shift_value);
            }
            if(cards2 && cards2[0] === goal[i]){
                answer = "o";
                console.log("cards1[0] : " + cards1[0] + " goal : " + goal[i]);
                cards2.shift();
            }
        }
        else{
            console.log( "No 발생 => " + "cards1 : " + cards1 + " cards2 : " + cards2)
            return "No";
        }
            
    }
    if(answer === "o")
        return "Yes";
}