function solution(num_list) {
    var answer = [];
    let holsu = 0;
    let jjaksu = 0;
    
    for(let i = 0; i < num_list.length; i++){
        if(num_list[i] % 2 == 0)
            jjaksu += 1
        else
            holsu += 1
    }
    return [jjaksu, holsu];
}