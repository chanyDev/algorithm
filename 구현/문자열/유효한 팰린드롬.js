function solution(str) {
  str = str.toLowerCase().replace(/[^a-z]/g, '');
  const reverse = str.split('').reverse().join('');

  return str === reverse ? 'YES' : 'NO';
}

console.log(solution('found7, time: study; Yduts; emit, 7Dnuof')); // YES
console.log(solution('JavaScript TypeScript')); // NO
