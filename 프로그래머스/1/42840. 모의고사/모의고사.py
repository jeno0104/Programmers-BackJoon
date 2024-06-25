
def solution(answers):
    man1 = [1, 2, 3, 4, 5]
    man2 = [2, 1, 2, 3, 2, 4, 2 ,5]
    man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    result = [0 for i in range(3)]
    answer = []
    for i in range(len(answers)):
        ans = answers[i]
        if man1[i % len(man1)] == ans:
            result[0] += 1 
        if man2[i % len(man2)] == ans:
            result[1] += 1 
        if man3[i % len(man3)] == ans:
            result[2] += 1 
    
    max_value = max(result)
    
    for i in range(len(result)):
        if result[i] == max_value:
            answer.append(i + 1)
    return answer