import sys

input = sys.stdin.readline
height_info = []

for i in range(9):
    height = int(input())
    height_info.append(height)


height_info.sort()
height_sum = sum(height_info)
new_height = height_info
answer = []
for i in range(len(height_info)):
    for j in range(i + 1, len(height_info)):
        if height_sum - height_info[i] - height_info[j] == 100:
            a = height_info.index(height_info[i])
            b = height_info.index(height_info[j])
            break 
height_info.pop(a)
height_info.pop(b - 1)

for i in height_info:
    print(i)
