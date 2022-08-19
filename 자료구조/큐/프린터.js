// 첫 번째 구현
// function solution(priorities, location) {
//   const newArr = priorities.map((priority, index) => {
//     return { priority, index };
//   });
//   const queue = [];
//   let count = 0;

//   while (newArr.length) {
//     const headEl = newArr.shift();
//     const hasHighPriority = newArr.find(el => el.priority > headEl.priority);

//     if (hasHighPriority) {
//       newArr.push(headEl);
//     } else {
//       queue.push(headEl);
//     }
//   }

//   const order = queue.findIndex(el => el.index === location) + 1;
//   return order;
// }

// 첫 번째와 같이 구현할 경우 모든 문서의 인쇄가 끝난 후 요청 문서의 인쇄 순서를 확인하기 때문에 불필요한 while문 순회가 필요하고 인쇄 순서 확인을 위한 추가 작업이 필요하기 때문에 효율적이지 않다고 판단.

// 두 번째 구현
function solution(priorities, location) {
  const newArr = priorities.map((priority, index) => {
    return { priority, index };
  });
  const queue = [];
  let count = 0;

  while (true) {
    const headEl = newArr.shift();
    const hasHighPriority = newArr.find(el => el.priority > headEl.priority);

    if (hasHighPriority) {
      newArr.push(headEl);
    } else {
      if (headEl.index === location) {
        return queue.length + 1;
      }
      queue.push(headEl);
    }
  }
}

console.log(solution([2, 1, 3, 2], 2)); // 1
console.log(solution([1, 1, 9, 1, 1, 1], 0)); // 5
