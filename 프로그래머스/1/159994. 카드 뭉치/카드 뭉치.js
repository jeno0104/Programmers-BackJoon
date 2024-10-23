function solution(cards1, cards2, goal) {
    let cardsOne = [];
    let cardsTwo = [];
    for(let i = 0; i < goal.length; i++){
        for(let j = 0; j < cards1.length; j++){
            if(goal[i] === cards1[j]){
                cardsOne.push(j);
            }
        }
        for(let j = 0; j < cards2.length; j++){
            if(goal[i] === cards2[j]){
                cardsTwo.push(j);
            }
        }
    }
    let flag = false;
    for(let i = 0; i < cardsOne.length; i++){
        if(i !== cardsOne[i]){
            flag = true;
            return "No"
        }
    }
    for(let i = 0; i < cardsTwo.length; i++){
        if(i !== cardsTwo[i]){
            flag = true;
            return "No"
        }
    }
    if(!flag) return "Yes"
    // console.log(cardsOne, cardsTwo)
    
}