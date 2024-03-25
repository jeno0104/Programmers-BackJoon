n = int(input())
times = list(map(int, input().split()))

times.sort()

result = 0
current = []

for time in times:
    result += time 
    current.append(result)
answer = sum(current)
print(answer)

