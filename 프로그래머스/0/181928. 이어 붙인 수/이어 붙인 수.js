function solution(num_list) {
    var answer = 0;
    let hol = "";
    let jjak = "";
    
    for(let i = 0; i < num_list.length; i++){
        if(num_list[i] % 2 === 0){
            jjak += num_list[i].toString();
            console.log("짝 : " + num_list[i]);
        }
        else{
            hol += num_list[i].toString();
            console.log("홀 : " + num_list[i]);
        }
    }
    console.log(jjak);
    console.log(hol);
    answer = Number(jjak) + Number(hol)
    return answer;
}