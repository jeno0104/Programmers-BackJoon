# 나이순 정렬
n = int(input())
user_info = []

for i in range(n):
    age, name = input().split()
    user_info.append([int(age), name, i])

user_info.sort(key = lambda x:(x[0], x[2]))

for info in user_info:
    print(info[0], info[1])
    