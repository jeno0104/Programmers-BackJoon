function solution(k, tangerine) {
    var answer = 0;
    let newT = Array.from(new Set(tangerine)).sort((a, b) => a - b);
    let map = new Map();
    
    for(let i = 0; i < newT.length; i++){
        map.set(newT[i], 0);
    }
    for(let i = 0; i < tangerine.length; i++){
        map.set(tangerine[i], map.get(tangerine[i]) + 1)
    }
    
    let newA = Array.from(map).sort((a, b) => b[1] - a[1])
    let curr = 0;
    
    while(k > 0){
        k -= newA[curr][1];
        curr++
        answer++;
    }
    
    return answer;
}