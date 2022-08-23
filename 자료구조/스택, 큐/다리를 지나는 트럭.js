// 풀이
// 1초마다 트럭이 다리를 지난다. 이때 다리의 길이는 고정되어있다.
// 대기 중인 트럭이 있다면 트럭이 다리에 올라간다.
// 이때, 다리를 지나는 트럭의 무게와 다리에 올라갈 트럭의 무게의 합이 견딜 수 있는 무게보다 작거나 같다면 트럭이 올라간다.
// 크다면 다리에 올라가있는 트럭만 지나간다.
function solution(bridge_length, weight, truck_weights) {
  const queue = new Array(bridge_length).fill(0);
  let count = 0;

  while (queue.length) {
    count++;
    queue.shift();

    if (truck_weights.length) {
      const sum = queue.reduce((prev, curr) => prev + curr, 0);

      if (sum + truck_weights[0] <= weight) {
        queue.push(truck_weights.shift());
      } else {
        queue.push(0);
      }
    }
  }
  return count;
}

console.log(solution(2, 10, [7, 4, 5, 6])); // 8
console.log(solution(100, 100, [10])); // 101
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])); // 110
