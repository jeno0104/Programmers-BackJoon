n, m = map(int, input().split())
n_number = list(map(int, input().split()))
i_j_number = []

s = []
s.append(0)
for i in range(m):
    i_j_number.append(list(map(int, input().split())))

for i in range(0, len(n_number)):
    s.append(s[i] + n_number[i]) 

for i in range(m):
    print(s[i_j_number[i][1]] - (s[i_j_number[i][0] - 1]))