def solution(d, budget):
    answer = 0
    d.sort()
    count = 0
    
    for i in range(len(d)):
        if budget < d[i]:
            break
        budget -= d[i]
        count += 1
        
    if budget < 0:
        return count - 1
    else:
        return count 