function solution(answers) {
    const result = []
  let one = [1, 2, 3, 4, 5];
  let two = [2, 1, 2, 3, 2, 4, 2, 5];
  let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (one[i % one.length] == answers[i]) {
      count[0]++;
    }
    if (two[i % two.length] == answers[i]) {
      count[1]++;
    }
    if (three[i % three.length] == answers[i]) {
      count[2]++;
    }
  }

  let max = Math.max(...count);

  for (let j = 0; j < count.length; j++) {
    if (max == count[j]) {
      result.push(j + 1);
    }
  }
  return result;
}