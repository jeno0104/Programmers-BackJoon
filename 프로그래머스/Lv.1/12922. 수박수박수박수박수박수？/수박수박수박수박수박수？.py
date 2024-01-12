def solution(n):
    subak = ["수", "박"]
    answer = ""
    flag = 0
    
    for i in range(n):
        if flag == 1:
            flag = 1
        answer += subak[flag % 2]
        flag += 1
    return answer