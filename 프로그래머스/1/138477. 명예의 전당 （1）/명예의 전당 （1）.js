function solution(k, score) {
    var myoungye = [];
    let answer = [];
    
    for(let i = 0 ; i < score.length; i++){
        myoungye.push(score[i]);
        myoungye = myoungye.sort((a, b) => a - b).reverse();
        if(myoungye.length > k){
            myoungye.pop()
        }
        answer.push(myoungye[myoungye.length - 1]);
        
    }
  
//     myoungye.push(score[0]);
//     answer.push(score[0]);
//     if(myoungye[0] <= score[1]){
//         myoungye.splice(0, 0, score[1]);
//     }
//     else{
//         myoungye.splice(1, 0, score[1]);
//     }
//     answer.push(myoungye[myoungye.length - 1]);
//     for(let i = 2; i < score.length; i++){
//         for(let j = 0; j < k; j++){
//             if(myoungye[j] === undefined){
//                 break;
//             }
//             if(myoungye[j] < score[i]){
//                 myoungye.splice(j, 0, score[i]);
//                 break;
//             }
//             else if(myoungye[j] >= score[i] && myoungye[j + 1] <= score[i]){
//                 myoungye.splice(j + 1, 0, score[i]);
//                 break;
//             }
                
//         }
//         if(myoungye.length > k){
//             myoungye.pop()
//         }        
//         answer.push(myoungye[myoungye.length - 1]);
//     }
    
    return answer;
}