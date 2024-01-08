def solution(phone_number):
    answer = ''
    length = len(phone_number) - 4
    for i in range(length):
        answer += "*"
    for i in range(length, len(phone_number)):
        answer += phone_number[i]
    print(answer)
    return answer