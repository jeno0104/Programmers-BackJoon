n = int(input())
km = list(map(int, input().split()))
girum = list(map(int, input().split()))

total_biyong = girum[0] * km[0]

girum.pop(0)
girum.pop(-1)
girum.sort()
km.pop(0)
sum_km = sum(km)
total_biyong += girum[0] * sum_km
print(total_biyong)
