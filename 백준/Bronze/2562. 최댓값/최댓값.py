number = []

for i in range(9):
    num = int(input())
    number.append(num)


max_value = max(number)
max_value_index = number.index(max(number))

print(max_value)
print(max_value_index + 1)