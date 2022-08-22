// 풀이
// 최대로 가질 수 있는 폰켓몬 갯수는 정해져 있다.
// 이때 폰켓몬 종류가 최대로 가질 수 있는 갯수보다 작다면 종류를, 아니면 최대 갯수를 반환
function solution(nums) {
  const max = nums.length / 2;

  const res = [...new Set(nums)].length < max ? [...new Set(nums)].length : max;

  return res;
}

console.log(solution([3, 1, 2, 3])); // 2
console.log(solution([3, 3, 3, 2, 2, 4])); // 3
console.log(solution([3, 3, 3, 2, 2, 2])); // 2
