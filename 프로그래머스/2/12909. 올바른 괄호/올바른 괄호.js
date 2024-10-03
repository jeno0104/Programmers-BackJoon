function solution(s){
    
    let arr = [];
    
    for(let value of s){
        if(value === ")" && arr.length === 0) {
            arr.push(value);
        }
        else if(value === "("){
            arr.push(value);
        }
        else if(value === ")" && arr[arr.length - 1] === "("){
            arr.pop();
        }
    }
    
    return arr.length === 0 ? true : false;
}