def solution(numbers):
    answer = []
    numbers.sort()
    print(numbers);
    for i in range(0, len(numbers)):
        for j in range(i + 1, len(numbers)):
            answer.append(numbers[i] + numbers[j])
    answer = list(set(answer));
    answer.sort()
    
    return answer

# def solution(numbers):
#     result = []

#     for i in range(len(numbers)):
#         for j in range(i + 1, len(numbers)):
#             result.append(numbers[i] + numbers[j])
            
#     result.sort()
#     result = list(set(result))
#     return result