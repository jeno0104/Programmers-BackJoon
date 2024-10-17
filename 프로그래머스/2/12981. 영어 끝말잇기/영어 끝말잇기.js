function solution(n, words) {
    var answer = [];
    let current = [];

    
//     for(let i = 0; i < 9; i++){
//         console.log(i % 3); // 누구냐? 
//         console.log(Math.ceil((i + 1) / 3)); // 답
//         console.log("============")
//     }
//     // console.log( 8 % 3 + 1, Math.ceil(9 / 2))
    
    
    
    let whoIs = 0;
    let position = 0;
    
    for(let i = 0; i < words.length; i++){
       
        if(current.length === 0){
            current.push(words[i]);
            continue
        }
        let first = words[i - 1].split("");
        let second = words[i].split("");
        // console.log(`first = ${first}, 마지막 = ${first[first.length - 1]}, second = ${second}, 처음 = ${second[0]}`)
        if(current.includes(words[i])){
            whoIs = (i % n) + 1;
            position = Math.ceil((i + 1) / n);
            break;
        }
        else if(first[first.length - 1] !== second[0]){
            whoIs = (i % n) + 1;
            position = Math.ceil((i + 1) / n);
            break;
        }
        else{
            current.push(words[i]);
        }
    }
    
    return ([whoIs, position])
}