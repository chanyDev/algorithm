// 풀이
// 명함은 눕힐 수 있기 때문에 가로, 세로 길이 구분 없이 오름차순 또는 내림차순으로 정렬한다.
// 정렬된 명함들의 동일한 인덱스의 최대값이 최소한의 길이가 된다.
function solution(sizes) {
  const [minWidth, minHeight] = sizes.reduce(
    (prev, curr) => {
      const [width, height] = curr.sort((a, b) => a - b);

      return [Math.max(width, prev[0]), Math.max(height, prev[1])];
    },
    [0, 0]
  );

  return minWidth * minHeight;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
); // 4000
console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
); // 120
console.log(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ])
); // 133
