const solution = str => {
  str = str.toLowerCase().replace(/[^a-z]/g, '');
  const reverse = str.split('').reverse().join('');

  return str === reverse;
};

console.log(solution('found7, time: study; Yduts; emit, 7Dnuof2')); // true
console.log(solution('javascript')); // false
