function solution(s) {
  const stack = [];

  for (const x of s) {
    if (x === '(') {
      stack.push(x);
    } else {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }

  return stack.length === 0;
}

console.log(solution('()()'));
console.log(solution('(())()'));
console.log(solution(')()('));
console.log(solution('(()('));
