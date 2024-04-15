n, m = map(int, input().split())

number = list(map(int, input().split()))
answer = 0

for i in range(len(number)):
    for j in range(i + 1, len(number)):
        for k in range(j + 1, len(number)):
            if number[i] + number[j] + number[k] > m:
                continue
            else:
                answer = max(answer, number[i] + number[j] + number[k])

print(answer)