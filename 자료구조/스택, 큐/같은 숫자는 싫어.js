function solution(arr) {
  const answer = arr.filter((num, i) => num !== arr[i - 1]);

  return answer;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1])); // 	[1,3,0,1]
console.log(solution([4, 4, 4, 3, 3])); // [4,3]
