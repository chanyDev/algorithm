// 풀이
// 하루마다 개발 속도만큼 기능을 개발한다.
// 개발이 종료되면 첫번째 기능이 완성된 경우 배포를 진행 및 갯수를 증가 시킨다.
// 배포가 완료되면 완료된 갯수를 담는다.
// 위 동작을 남은 기능이 없을 때까지 반복한다.
function solution(progresses, speeds) {
  const res = [];

  while (progresses.length) {
    for (let i = 0; i < progresses.length; i++) {
      if (progresses[i] < 100) {
        progresses[i] += speeds[i];
      }
    }

    let count = 0;
    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      count++;
    }
    if (count > 0) {
      res.push(count);
    }
  }

  return res;
}

console.log(solution([93, 30, 55], [1, 30, 5])); // [2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // [1, 3, 2]
