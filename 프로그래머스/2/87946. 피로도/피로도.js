function solution(k, dungeons) {
    var answer = -1;
    let visited = new Array(dungeons.length).fill(false);
    answer = dfs(dungeons, visited, k, 0, answer);
    return answer;
}

function dfs(dungeons, visited, hp, L, answer){
    answer = Math.max(L, answer);
    
    for(let i = 0; i < dungeons.length; i++){
        if(!visited[i] && hp >= dungeons[i][0]){
            visited[i] = true;
            answer = dfs(dungeons, visited, hp - dungeons[i][1], L + 1, answer);
            visited[i] = false;
        }
    }
    return answer;
}