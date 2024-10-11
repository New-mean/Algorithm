function solution(s) {
    var answerarr = [];
    var String = s;
    s = s.split('');
    
    for(var i=0;i<s.length;i++) {
        var answer = -1; 
        for(var j=0;j<i;j++) {
            if(s[i] == s[j]) { 
                answer = i - String.substr(0, i).lastIndexOf(s[j]); 
            }    
        }
        answerarr.push(answer);
    }
   
    return answerarr;
}