s = input().upper()
new_s = list(set(s))

cnt = []



for string in new_s:
    str_count = s.count(string)
    cnt.append(str_count)

if cnt.count(max(cnt)) > 1:
    print("?")
else:
    print(new_s[cnt.index(max(cnt))])