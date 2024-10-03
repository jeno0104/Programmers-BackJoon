function solution(arr) {
    let newArr = [];
    let minValue = Math.min(...arr);
    
    for(let value of arr){
        if(value !== minValue){
            newArr.push(value);
        }
    }
    return newArr.length !== 0 ? newArr : [-1]
    
}