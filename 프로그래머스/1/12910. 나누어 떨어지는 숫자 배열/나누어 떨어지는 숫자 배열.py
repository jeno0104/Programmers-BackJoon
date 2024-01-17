def solution(arr, divisor):
    answer = []
    for num in arr:
        if(num % divisor == 0):
            answer.append(num)
    
    answer.sort()
        
    return [-1] if len(answer) == 0 else answer