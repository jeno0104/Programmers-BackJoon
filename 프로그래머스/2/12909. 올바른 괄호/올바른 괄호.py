def solution(s):
    answer = []
    
    for i in s:
        if i == "(":
            answer.append(i)
        elif i == ")":
            if len(answer) == 0:
                return False 
            else:
                answer.pop()
                
    if answer:
        return False
    else:
        return True