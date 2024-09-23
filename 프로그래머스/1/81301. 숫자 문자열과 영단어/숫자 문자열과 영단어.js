function solution(s) {
    const nbr = ["zero", "one", "two", "three" , "four", "five", "six", "seven", "eight", "nine"]
    let answer = s
    
    for(let i =0 ; i < nbr.length; i++){
        let arr = answer.split(nbr[i])
         answer = arr.join(i)
    }
   return Number(answer)

}