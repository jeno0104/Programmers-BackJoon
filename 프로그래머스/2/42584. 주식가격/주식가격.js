function solution(prices) {
    var answer = [];
    
    for(let i = 0; i < prices.length; i++){
        let currentPrice = prices[i];
        let cnt = 0;
        
        for(let j = i + 1; j < prices.length; j++){
            cnt++;
            if(currentPrice > prices[j]) break; 
        }
        answer.push(cnt);
    }
    return answer;
}