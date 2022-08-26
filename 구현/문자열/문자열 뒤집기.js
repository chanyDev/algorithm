function solution(str) {
  // 1. for...of 문을 이용한 풀이 (문자 갯수만큼 반복하기 때문에 느리다.)
  // let answer = '';
  // for (const x of str) {
  //   answer = x + answer;
  // }

  // 2. 배열 메소드를 이용한 풀이
  // const answer = str.split('').reverse().join('');

  // 3. 투포인터를 이용한 풀이 (문자를 대칭으로 서로 변경)
  const strArr = str.split('');
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    const swap = strArr[left];
    strArr[left] = strArr[right];
    strArr[right] = swap;

    left++;
    right--;
  }

  const answer = strArr.join('');

  return answer;
}

console.log(solution('abcdef')); // fedcba
console.log(solution('1234-5678')); // 8765-4321
