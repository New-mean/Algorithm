function solution(numbers, target) {
    let answer = 0;
  let possibleSums = [0];
  for (let num of numbers) {
    let nextSums = [];
    for (let sum of possibleSums) {
      nextSums.push(sum + num);
      nextSums.push(sum - num);
    }
    possibleSums = nextSums;
  }
  for (let sum of possibleSums) {
    if (sum === target) {
      answer++;
    }
  }
  return answer;
}