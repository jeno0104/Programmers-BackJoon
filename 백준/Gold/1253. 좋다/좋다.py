import sys

input = sys.stdin.readline

n = int(input())

number = list(map(int, input().split()))
number.sort()

count = 0

for i in range(n):
     
    tmp = number[:i] + number[i + 1:]
    start = 0
    end = len(tmp) - 1

    while start < end:
        if tmp[start] + tmp[end] == number[i]:
            count += 1 
            break 
        if tmp[start] + tmp[end] < number[i]:
            start += 1 
        else:
            end -= 1
print(count)