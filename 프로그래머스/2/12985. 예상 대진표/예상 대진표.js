function solution(n,a,b)
{
    var answer = 0;
//     let arr = [];
//     let daejin = [];
//     let left = Math.min(a, b);
//     let right = Math.max(a, b);
    
    
//     for(let i = 1; i <= n; i++){
//         arr.push(i);
//         if(arr.length === 2){
//             daejin.push(arr);
//             arr = [];
//         }
//     }
//     while(true){
//         let result = [];
//         let newDaejin = [];
        
//         for(let [x, y] of daejin){
//             if(x === left || y === left){
//                 newDaejin.push(left);
//             }
//             else if(x === right || y === right){
//                 newDaejin.push(right);
//             }
//             else{
//                 newDaejin.push(Math.max(x, y));
//             }
//             if(newDaejin.length === 2){
//                 if(newDaejin[0] === left && newDaejin[1] === right){
//                     answer += 1;
//                     return answer;
//                 }
//                 result.push(newDaejin);
//                 newDaejin = [];
//             }
//         }
        
//         daejin = result;
//         answer++;
//     }
    while(a !== b){
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        answer++;
    }
    return answer;
}