def solution(s):
    answer = ""
    new_s = s.split(" ")
    num_s = []
    for i in new_s:
        num_s.append(int(i))
    
    min_num = min(num_s)
    max_num = max(num_s)
    answer = f'{min_num} {max_num}'
    print(answer)
    return answer