function solution(price) {
    var answer = 0;
    if(price >= 100000 && price < 300000){
        price = price - (price * 0.05);
        return Math.floor(price);
    }
    else if(price >= 300000 && price < 500000){
        price = price - (price * 0.1);
        return Math.floor(price);
    }
    else if(price >= 500000){
        price = price - (price * 0.2);
        return Math.floor(price);
    }
    else{
        return price;
    }
}