function solution(strlist) {
    var answer = [];
    
    for(let i = 0; i < strlist.length; i++){
        str_length = strlist[i];
        console.log(str_length);
        answer.push(str_length.length);
    }
    return answer;
}