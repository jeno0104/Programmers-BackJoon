n = int(input())

people = []
rank_count = 1

for i in range(n):
    weight, length = map(int, input().split())

    people.append([weight, length, rank_count])

for i in range(len(people)):
    people_info = people[i]
    rank_count = 1
    for j in range(0, len(people)):
        if i == j:
            continue
        if people_info[0] < people[j][0] and people_info[1] < people[j][1]:
            rank_count += 1
    people[i][2] = rank_count

for i in people:
    print(i[2], end = " ")