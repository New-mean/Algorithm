function solution(price, money, count) {
    var answer = 0;
    let num =0;
        for(let i=0; i<=count;i++){
             num += price * i
        }
    if(num > money){
        answer = num - money
    }else {
        return 0;
    }

    return answer;
}