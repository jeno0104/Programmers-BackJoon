function solution(arr1, arr2) {
    var answer = [];
    for(let i = 0; i < arr1.length; i++){
        let arr = arr1[i];
        let arrs = [];
        
        for(let j = 0; j < arr.length; j++){
            arrs.push(arr1[i][j] + arr2[i][j]);
            
        }
        answer.push(arrs);
    }
    return answer;
}