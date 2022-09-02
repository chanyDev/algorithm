function solution(str) {
  let answer = 'YES';
  str = str.toLowerCase();

  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] != str[str.length - i - 1]) return 'NO';
  }

  return answer;
}

console.log(solution('gooG')); // YES
console.log(solution('JavaScript')); // NO
