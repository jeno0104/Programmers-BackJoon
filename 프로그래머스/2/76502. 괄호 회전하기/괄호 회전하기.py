def solution(s):
    answer = 0
    arr_s = list(s)
    result = []
    
    for i in range(len(arr_s)):
        if i == 0:
            for j in range(len(arr_s)):
                if len(result) == 0:
                    result.append(arr_s[j])                    
                elif arr_s[j] == "]":
                    if result[-1] == "[":
                        result.pop()
                elif arr_s[j] == "}":
                    if result[-1] == "{":
                        result.pop()
                elif arr_s[j] == ")":
                    if result[-1] == "(":
                        result.pop()
                else:
                    result.append(arr_s[j])
            if len(result) == 0:
                answer += 1
            result = []
        else:
            pop_value = arr_s.pop(0)
            arr_s.append(pop_value)
            for j in range(len(arr_s)):
                if len(result) == 0:
                    result.append(arr_s[j])
                elif arr_s[j] == "[" or arr_s[j] == "{" or arr_s[j] == "(":
                    result.append(arr_s[j])
                elif arr_s[j] == "]" and result[-1] == "[":
                    result.pop()
                elif arr_s[j] == "}" and result[-1] == "{":
                    result.pop()
                elif arr_s[j] == ")" and result[-1] == "(":
                    result.pop()
            if len(result) == 0:
                answer += 1
            result = []
            
            
            
            
            

    return answer
