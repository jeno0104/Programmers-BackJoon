function solution(s) {
    var answer = [];
    let check = [];
    for(let i = 0; i < s.length; i++){
        let flag = true;
        let target = 0;
        
        for(let j = 0; j < check.length; j++){
            if(s[i] === check[j]){
                target = j;
                flag = false;
            }
        }
        if(flag){ // 발견 x 
            check.push(s[i]);
            answer.push(-1);
        }
        else{ // 발견 o
            check.push(s[i]);
            answer.push(i - target);
        }
    }
    return answer;
}