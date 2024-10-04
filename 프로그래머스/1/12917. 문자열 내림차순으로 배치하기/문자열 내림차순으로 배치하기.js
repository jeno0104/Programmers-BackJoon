function solution(s) {
    var answer = '';
    let newS = s.split("").sort().reverse().join("");
    return newS;
}