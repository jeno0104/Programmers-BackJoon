def solution(arr1, arr2):
    result = []
    answer = []
    sum = 0
    for i in range(len(arr1)):
        for j in range(len(arr2[0])):
            for k in range(len(arr1[0])):
                sum += arr1[i][k] * arr2[k][j]
            result.append(sum)
            sum = 0
        answer.append(result)
        result = []
    return answer            
        
    

    
                