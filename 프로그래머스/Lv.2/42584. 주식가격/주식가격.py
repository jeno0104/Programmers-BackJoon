def solution(prices):
    answer = []
    count = 0
    flag = 0
    for i, price in enumerate(prices):
        for j in range(i + 1, len(prices)):
            if price > prices[j]:
                count += 1 
                answer.append(count)
                count = 0
                flag += 1
                break
            count += 1 
        if flag != 1:
            answer.append(count)
            count = 0
        flag = 0
            
    return answer