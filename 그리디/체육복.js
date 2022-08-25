// 풀이
// 학생 별로 가지고 있는 체육복의 갯수를 담는다.
// 앞 사람에게 빌리는 경우와 뒷 사람에게 빌리는 경우를 만들어 학생의 체육복 갯수를 수정한다.
// 체육복을 갖고 있는 학생들의 수를 구한다.
function solution(n, lost, reserve) {
  const students = Array(n).fill(1);

  reserve.forEach(item => (students[item - 1] += 1));
  lost.forEach(item => (students[item - 1] -= 1));

  for (let i = 0; i < n; i++) {
    if (students[i] === 0 && students[i - 1] === 2) {
      students[i] = 1;
      students[i - 1] = 1;
    } else if (students[i] === 0 && students[i + 1] === 2) {
      students[i] = 1;
      students[i + 1] = 1;
    }
  }

  const answer = students.filter(student => student !== 0).length;

  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5])); // 5
console.log(solution(5, [2, 4], [3])); // 4
console.log(solution(3, [3], [1])); // 2
