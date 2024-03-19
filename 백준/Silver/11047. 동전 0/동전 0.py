N, K = map(int, input().split())
coins = []
for i in range(N):
    coins.append(int(input()))

coins.sort(reverse = True)
count = 0

for coin in coins:
    if K // coin != 0 and K != 0:
        count += (K // coin)
        K -= (K // coin) * coin
        
print(count)