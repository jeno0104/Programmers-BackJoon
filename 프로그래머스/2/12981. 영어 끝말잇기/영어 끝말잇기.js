function solution(n, words) {
    var answer = [];
    let stack = [];
    stack.push(words[0]);
    let first = 0;
    let second = 0;
//     1. includes
//     2. stack 맨 위에 맨 끝 글자와 맨 처음 글자 비교해서 같은지 비교
    for(let i = 1; i < words.length; i++){
        let stackValue = stack[stack.length - 1];
        
        if(stack.includes(words[i])){
            // console.log(`포함된 케이스: i = ${i}`)
            first = parseInt(i % n) + 1
            second = parseInt(i / n) + 1
            return [first, second];
        }
        
        if(stackValue[stackValue.length - 1] === words[i][0]){
            stack.push(words[i]);
        }
        else{
            // console.log(`끝말잇기가 안맞는 케이스 : i = ${i}`)
            first = parseInt(i % n) + 1
            second = parseInt(i / n) + 1
            return [first, second]
        }
        
    }

    return [first, second];
}