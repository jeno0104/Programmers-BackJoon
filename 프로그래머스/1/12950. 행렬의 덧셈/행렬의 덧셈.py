def solution(arr1, arr2):
    answer = []
    result = []
    for i in range(0, len(arr1)):
        for j in range(0, len(arr2[0])):
            result.append(arr1[i][j] + arr2[i][j])
        answer.append(result)
        result = []
    return answer