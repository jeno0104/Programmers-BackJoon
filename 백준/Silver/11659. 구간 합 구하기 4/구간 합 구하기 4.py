import sys 

input = sys.stdin.readline

n, m  = map(int, input().split())

number = list(map(int, input().split()))

gugan_sum = [0]

for i in range(len(number)):
    sum = gugan_sum[i] + number[i]
    gugan_sum.append(sum)

for i in range(m):
    a, b = map(int, input().split())
    print(gugan_sum[b] - gugan_sum[a - 1])

