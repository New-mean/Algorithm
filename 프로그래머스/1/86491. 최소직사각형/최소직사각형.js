function solution(sizes) {

 let longer = [];
    let shorter = [];

    for(let i = 0; i < sizes.length; i++) {
        if(sizes[i][0] > sizes[i][1]) {
            longer.push(sizes[i][0]);
            shorter.push(sizes[i][1]);
        } else {
            longer.push(sizes[i][1]);
            shorter.push(sizes[i][0]);
        }
    }

    let biggerSideMax = Math.max(...longer);
    let smallerSideMax = Math.max(...shorter);
    
    return biggerSideMax * smallerSideMax;
    return answer;
}