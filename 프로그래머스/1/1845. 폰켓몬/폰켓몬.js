function solution(nums) {
    var answer = 0;
    let map = new Map();
    let curr = 0;
    let flag = false;
    
    for(let x of nums){
        
        if(curr === nums.length / 2){
            flag = true;
            return curr;
        }
        if(map.get(x) === undefined){
            map.set(x, 1);
            curr += 1;
        }
        else if(map.get(x) === 1){
            continue;
        }
        
    }
    if(!flag){
        return curr
    } 
}