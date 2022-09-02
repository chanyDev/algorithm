function solution(str) {
  let answer = '';

  for (const x of str) {
    if (!isNaN(x)) {
      answer += x;
    }
  }

  return parseInt(answer);
}

console.log(solution('g0en2T0s8eSoft')); // 208
