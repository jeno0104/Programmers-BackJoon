function solution(record) {
    var answer = [];
    let user_info = [];
    let new_user_info = [];
    
    for(let i = 0; i < record.length; i++){
        let [type, id, name] = record[i].split(" ");
        
        if(type === "Enter" || type === "Change"){
            user_info[id] = name;
        }
    }
    for(let i = 0; i < record.length; i++){
        let [type, id] = record[i].split(" ");
        
        if(type === "Enter"){
            answer.push(user_info[id] + "님이 들어왔습니다.");
        }
        else if(type === "Leave"){
            answer.push(user_info[id] + "님이 나갔습니다.");
        }
    }
    
    return answer;
}