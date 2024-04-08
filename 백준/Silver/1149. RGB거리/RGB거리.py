n = int(input())
RGB = []

for i in range(n):
    a, b, c = map(int, input().split())
    RGB.append([a, b, c])

for i in range(1, n):
    # R
    RGB[i][0] = min(RGB[i - 1][1], RGB[i - 1][2]) + RGB[i][0]
    # G
    RGB[i][1] = min(RGB[i - 1][0], RGB[i - 1][2]) + RGB[i][1]
    # B
    RGB[i][2] = min(RGB[i - 1][0], RGB[i - 1][1]) + RGB[i][2]

print(min(RGB[n - 1]))
