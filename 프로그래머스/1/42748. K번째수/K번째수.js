function solution(array, commands) {
    var answer = [];
    
    commands.forEach(arr => {
        let new_arr = array.slice(arr[0] - 1, arr[1]);
        new_arr.sort((a, b)=> a - b);
        console.log(new_arr);
        
        answer.push(new_arr[arr[2] - 1]);
    })
    return answer;
}