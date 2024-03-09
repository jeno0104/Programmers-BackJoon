def solution(prices):
    answer = []
    count = 0
    
    for i, price in enumerate(prices):
        for j in range(i + 1, len(prices)):
            if price > prices[j]:
                count += 1
                break
            else:
                count += 1
        answer.append(count)
        count = 0
    
    return answer