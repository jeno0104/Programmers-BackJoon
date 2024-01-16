def solution(n):
    count = 0
    sum = 0
    flag = 1
    for i in range(1, n + 1):
        for j in range(flag, n + 1):
            sum += j
            if(sum == n):
                count += 1 
            else:
                pass
        flag += 1
        sum = 0
    
    return count
def solution(n):
    count = 0
    for i in range(1, n + 1):
        if n % i == 0 and i % 2 == 1:
            count += 1
    return count
