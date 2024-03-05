function solution(name, yearning, photo) {
    var answer = [];
    const new_ob = name.map((name, index) => {
        return {
            index,
            name,
            value : 0
        }
    });
    
    for(let i = 0; i < photo.length; i++){
        let new_photo = photo[i];
        let sum = 0;
        for(let j = 0; j < new_ob.length; j++){
            
            let photo_name = new_photo.find((name) => {
                if(new_ob[j].name === name){
                    sum += yearning[new_ob[j].index];
                }
            });
        }
        answer.push(sum);
        sum = 0;
    }
    return answer;
}