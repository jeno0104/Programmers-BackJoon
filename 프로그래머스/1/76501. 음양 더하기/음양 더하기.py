def solution(absolutes, signs):
    answer = 0
    for i in range(0, len(absolutes)):
        if(signs[i] == True):
            answer += absolutes[i]
            print(f'true일 때 {answer}')
        else:
            answer = answer + (-2 * absolutes[i] + absolutes[i])
            print(f'false일 때 {answer}')
    return answer