function solution(want, number, discount) {
    var answer = 0;
    for(let i = 0; i < discount.length - 9; i++){
        let count = [];
        let newDis = discount.slice(i, i + 10);

        for(let j = 0; j < want.length; j++){
            let cnt = 0;
            
            for(let k = 0; k < newDis.length; k++){
                if(want[j] === newDis[k]) cnt++;
            }
            count.push(cnt);
        }
        let flag = false;
        for(let q = 0; q < count.length; q++){
            if(count[q] === number[q]){
                continue;
            }
            else{
                flag = true;
            }
        }
        if(!flag) answer++;
    }
    return answer;
}