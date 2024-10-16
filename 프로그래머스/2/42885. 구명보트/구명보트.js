function solution(people, limit) {
    var answer = 0
    let start = 0
    let end = people.length - 1
    people.sort((a, b) => a - b)
    while(start <= end){
        if(people[start] + people[end] <= limit){
            start++;
        }
        end--;
        answer++;
    }
    return answer;
}