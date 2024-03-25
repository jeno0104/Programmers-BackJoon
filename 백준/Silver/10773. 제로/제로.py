n = int(input())

number = []
for i in range(n):
    num = int(input())
    if num != 0:
        number.append(num)
    else:
        number.pop(-1)

print(sum(number))