import sys

input = sys.stdin.readline

n = int(input())
answer = 0

for i in range(1, n + 1):
    result = i
    i = str(i)
    for j in range(len(i)):
        result += int(i[j])
    if result == n:
        answer = int(i)
        break 

if answer != 0:
    print(answer)
else:
    print(0)
