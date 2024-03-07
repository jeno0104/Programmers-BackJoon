def solution(answers):
    result = []
    end = []
    jjic = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ]
    for i, pattern in enumerate(jjic):
        count = 0
        for j, answer in enumerate(answers):
            if answer == pattern[j % len(pattern)]:
                count += 1
        result.append(count)
    max_num = max(result)
    for i, num in enumerate(result):
        if max_num == num:
            end.append(i + 1)
    return end