function solution(my_string, alp) {
    var answer = '';
    const upper_alp = alp.toUpperCase()
    console.log(upper_alp)
    for(let i = 0; i < my_string.length; i++){
        if(my_string[i] === alp){
            answer += upper_alp
        } 
        else{
            answer += my_string[i]
        }
    }
    return answer;
}