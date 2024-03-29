def dfs(pc, computers, visited):
    visited[pc] = True
    for index, computer in enumerate(computers[pc]):
        if computer and visited[index] == 0:
            dfs(index, computers, visited)
            
def solution(n, computers):
    visited = [False] * n
    answer = 0
    
    for pc in range(n):
        if not visited[pc]:
            dfs(pc, computers, visited)
            answer += 1
    return answer

