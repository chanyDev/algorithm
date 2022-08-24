// 풀이
// 수포자마다 찍는 패턴을 담는다.
// 문제 갯수보다 패턴의 길이가 짧을 수 있기 때문에 index % 패턴 길이로 정답 여부를 확인하고 수포자마다 정답 갯수를 담는다.
// 수포자 중 가장 많은 정답을 맞힌 갯수를 구한다.
// 가장 많은 정답을 맞힌 갯수와 일치하는 수포자 번호를 담아 반환한다.
function solution(answers) {
  const students = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const solved = [0, 0, 0];

  answers.forEach((answer, index) => {
    if (answer === students[0][index % 5]) {
      solved[0] += 1;
    }

    if (answer === students[1][index % 8]) {
      solved[1] += 1;
    }

    if (answer === students[2][index % 10]) {
      solved[2] += 1;
    }
  });

  const highScore = Math.max(...solved);

  const result = solved.reduce((prev, curr, index) => {
    return curr === highScore ? [...prev, index + 1] : prev;
  }, []);

  return result;
}

console.log(solution([1, 2, 3, 4, 5])); // [1]
console.log(solution([1, 3, 2, 4, 2])); // [1, 2, 3]
console.log(solution([3, 3, 2, 1, 5])); // [3]
console.log(solution([5, 5, 4, 2, 3])); // [1, 2, 3]
console.log(solution([3, 3, 1, 1, 1, 1, 2, 3, 4, 5])); // [1, 3]
