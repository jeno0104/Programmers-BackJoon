number = list(map(int, input().split()))
number.sort()

count = 0
answer = []

for i in range(3):
    for j in range(3):
        if number[i] == number[j]:
            count += 1 
    answer.append(count)
    count = 0

if max(answer) == 3:
    print(10000 + (number[answer.index(max(answer))] * 1000))
elif max(answer) == 2:
    print(1000 + (number[answer.index(max(answer))] * 100))
else:
    print((max(number) * 100))



