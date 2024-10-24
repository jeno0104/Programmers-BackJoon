function solution(progresses, speeds) {
    var answer = [];
    let summary
//     while(progresses.length !== 0){
//         let cnt = 0;
//         let flag = false;
//         for(let i = 0; i < progresses.length; i++){
//             if(progresses[0] < 100){
//                 progresses[i] += speeds[i];
//                 flag = false;
//             }
//             else if(progresses[0] >= 100){
//                 flag = true;
//                 progresses.shift()
//                 speeds.shift();
//                 cnt++;
//                 continue;
//             }
//         }
//         if(flag){
            
//         }
//         console.log(progresses)
//         console.log(cnt)
//         console.log("====================")
//     }
    let newPro = [];
    for(let i = 0; i < progresses.length; i++){
        newPro.push(100 - progresses[i]);
    }
    let target = 0;
    let i = 1;
    
    let result = [];
    for(let i = 0; i < newPro.length; i++){
        
        result.push(Math.ceil(newPro[i] / speeds[i]))
    }
    let maxValue = result[0];
    
    let start = 0;
    let end = 1;
    let cnt = 1;
    while(end < result.length){
        if(result[start] < result[end]){
            start = end;
            end = start + 1;
            answer.push(cnt);
            cnt = 1;
        }
        else if(result[start] >= result[end]){
            cnt++;
            end++;
        }
    }
    answer.push(cnt)
    
    return answer;
}