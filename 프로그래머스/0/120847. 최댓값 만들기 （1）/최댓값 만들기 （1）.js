function solution(numbers) {
    var answer = 0;
    numbers.sort((a, b) => b - a);
    console.log(numbers);
    answer = numbers[0] * numbers[1];
    return answer;
}