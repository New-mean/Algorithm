function solution(n, m) {
    var answer = 0;
    for(let i=1; i<=Math.min(n,m); i++){
        if(n % i ===0 && m % i === 0){
            answer=i
        }
        
    }
    let num = n*m /answer
    return [answer , num]
}