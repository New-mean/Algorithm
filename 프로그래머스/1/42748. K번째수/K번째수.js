function solution(array, commands) {
    var answer = [];
    for(let i=0; i<commands.length;i++){
        let Array = array.slice(commands[i][0] - 1, commands[i][1]);
        
        Array.sort((a,b)=>a-b);
        
        answer.push(Array[commands[i][2] - 1]);
    }
    return answer;
        
}