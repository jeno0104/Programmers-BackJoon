n = int(input())
m = int(input())
m_value = list(map(int, input().split()))
m_value.sort()
start = 0
end = n - 1
count = 0
sum = m_value[start] + m_value[end]

while start < end:
    if sum == m:
        count += 1
        end -= 1
    elif sum > m:
        end -= 1
    elif sum < m:
        start += 1
    sum = m_value[start] + m_value[end] 
        
print(count)