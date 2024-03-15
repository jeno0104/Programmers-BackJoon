n = int(input())

start = 1
end = 1
count = 1
sum = start

while end != n:
    if sum == n:
        count += 1 
        end += 1
        sum += end
    elif sum > n:
        sum -= start
        start += 1 
    else:
        end += 1
        sum += end
print(count)