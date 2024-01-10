def solution(arr):
    answer = []
    for i in arr:
        if i not in answer:
            answer.append(i)
        if len(answer) > 0 and answer[-1] != i:
            answer.append(i)
    return answer
            