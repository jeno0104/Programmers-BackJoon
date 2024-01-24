function solution(my_string, overwrite_string, s) {
    var answer = '';
    let str_len = my_string.length;
    
    my_string = [...my_string];
    
    for(let i = 0; i < overwrite_string.length; i++){
        my_string[i + s] = overwrite_string[i];
    }
    
    my_string = String(my_string);
    answer = my_string.replaceAll(",", "");
    return answer;
}