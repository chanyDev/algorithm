function solution(numbers) {
  const answer = numbers
    .map(number => number + '')
    .sort((a, b) => {
      return b + a - (a + b);
    })
    .join('');

  return answer[0] === '0' ? '0' : answer;
}

console.log(solution([10, 6, 2])); // "6210"
console.log(solution([3, 30, 34, 5, 9])); // "9534330"

// 메모
// sort 함수를 사용하면 간단히 해결할 수 있는 문제지만 정확한 동작 원리를 이해하지 못한것이 문제였다.
// 문제의 첫번째 입력을 예로 들면 아래와 같다.
// 610 - 106 > 0 => b가 a보다 앞에 있어야 한다.
// 102 - 210 < 0 => a가 b보다 앞에 있어야 한다.
// 만약 비교한 값이 같다면 순서를 변경하지 않는다.
// 따라서 [6, 10, 2] 로 정렬된다.

// 참고자료
// https://d2.naver.com/helloworld/0315536
