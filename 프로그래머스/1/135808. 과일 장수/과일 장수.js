function solution(k, m, score) {
    var answer = 0;
    let new_box = score.sort().reverse();
    let new_boxes = [];
    let sum = 0;
    
    for(let i = 1; i < new_box.length + 1; i++){
        new_boxes.push(new_box[i - 1]);
        if(i % m === 0){
            new_boxes = new_boxes.sort();
            answer += new_boxes[0] * m;
            new_boxes = [];
        }
    }
    return answer;
}