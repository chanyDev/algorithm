// 참고 자료 : https://en.wikipedia.org/wiki/H-index

function solution(citations) {
  citations.sort((a, b) => b - a);
  let index = 0;

  while (index + 1 <= citations[index]) {
    index++;
  }

  return index;
}

console.log(solution([3, 0, 6, 1, 5])); // 3
console.log(solution([3, 1, 1, 1, 4])); // 2
console.log(solution([0, 0, 0, 0, 0, 0, 0])); // 0
console.log(solution([0, 0, 0, 1])); // 1
console.log(solution([9, 9, 9, 12])); // 4
console.log(solution([1, 1, 5, 7, 6])); // 3
