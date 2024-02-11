function solution(n, words) {
    var answer = [];
    let stack = [];
    let flag = 0;
    let count = 0;
    for(let i = 0; i < words.length; i++){
        if(flag !== n){
            flag += 1;
        }
        else{
            flag = 1;
        }
        count += 1;
        if(stack.length !== 0){
            let stack_val = stack[stack.length - 1];
            if(stack_val[stack_val.length - 1] !== words[i][0]){
                return [flag, Math.ceil(count / n)];
            }
            // console.log(stack.includes(words[i]));
            else if(stack.includes(words[i])){
                return [flag, Math.ceil(count / n)];
            }
        }
        stack.push(words[i]);
    }

    return [0, 0];
}