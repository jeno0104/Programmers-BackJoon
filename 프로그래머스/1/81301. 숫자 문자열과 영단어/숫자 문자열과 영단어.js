function solution(s) {
    var answer = ""
    let check = ""
    let number = {
        "zero": "0", 
        "one": "1",
        "two": "2",
        "three": "3",
        "four": "4",
        "five": "5",
        "six": "6",
        "seven": "7",
        "eight": "8",
        "nine": "9"
    };
    for(let i = 0; i < s.length; i++){
        if(!isNaN(s[i])) answer += String(s[i]);
        else{
            check += s[i];
            if(number[check] !== undefined){
                 answer += number[check];
                 check = "";
            }
        }
        // console.log(`s[${i}] = ${s[i]}, answer = ${answer}, check = ${check}`)
        
    }
    
    // console.log(answer)
    return Number(answer);
}