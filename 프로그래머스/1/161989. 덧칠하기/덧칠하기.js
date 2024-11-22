function solution(n, m, section) {
    var answer = 0;
    let arr = [];
    
    for(let i = 0; i < n; i++){
        arr.push(0);
    }
    for(let x of section){
        arr[x - 1] = 1;
    }
    let paintCheck = [];
    
    for(let i = 0; i < n - m + 1; i++){
        let check = arr.slice(i, i + m);
        if(check[0] === 1){
            for(let j = i; j < i + m; j++){
                arr[j] = 0;
            }
            answer++;
            continue;
        }
        if(i === n - m && check.includes(1)){
            answer++
        }
    }
    return answer;
}