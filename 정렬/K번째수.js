// 풀이
// 요구사항 그대로 자르고 정렬 후 해당 위치의 값을 반환
function solution(array, commands) {
  const res = commands.map(command => {
    const [start, end, position] = command;

    return array.slice(start - 1, end).sort((a, b) => a - b)[position - 1];
  });

  return res;
}

console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ]
  )
); // [5, 6, 3]
