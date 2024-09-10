function solution(s) {
    var answer = '';
    let a =s.split(" ");
    for(let i = 0; i<a.length; i++){
        for(let j=0; j<a[i].length; j++){
            if(j % 2 === 0) {
                answer += a[i][j].toUpperCase();
                console.log(answer)
            } else {
                answer += a[i][j].toLowerCase();
            }
        }
        if (i < a.length -1) {
            answer += ' ';
        }
    }
    return answer;
}