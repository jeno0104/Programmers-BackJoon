count = int(input())
number = list(map(int, input().split()))

max_value = max(number)

for i, num in enumerate(number):
    number[i] = (num / max_value) * 100


sum_value = sum(number)
avg_value = sum_value / len(number)

print(avg_value)