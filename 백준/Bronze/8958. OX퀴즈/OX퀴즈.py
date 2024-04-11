n = int(input())

final = []

for i in range(n):
    s = input()
    answer = 0
    result = 0
    for string in s:
        if string == "O":
            answer += 1
            result += answer
        elif string == "X":
            answer = 0
            result += answer
    final.append(result)
for i in final:
    print(i)