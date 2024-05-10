h, m = map(int, input().split())
plus_minute = int(input())

add_hour = 0

new_m = 0
new_h = 0

# 분 계산
if m + plus_minute > 59:
    add_hour = ((m + plus_minute) // 60)
    new_m = (m + plus_minute) % 60
else:
    new_m += plus_minute + m

# 시간 계산
if h + add_hour > 23:
    new_h = h + add_hour - 24
else:
    new_h = h + add_hour

print(new_h, new_m)