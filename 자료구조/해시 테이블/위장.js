// 풀이
// 의상 별로 묶는다.
// 경우의 수를 계산한다.
function solution(clothes) {
  const clothMap = new Map();

  clothes.forEach(cloth => {
    const clothType = cloth[1];

    if (clothMap.has(clothType)) {
      clothMap.set(clothType, clothMap.get(clothType) + 1);
    } else {
      clothMap.set(clothType, 2);
    }
  });

  const res = [...clothMap].reduce((prev, curr) => {
    return prev * (curr[1] * 1);
  }, 1);

  return res - 1;
}

console.log(
  solution([
    ['yellow_hat', 'headgear'],
    ['blue_sunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
  ])
); // 5

console.log(
  solution([
    ['crow_mask', 'face'],
    ['blue_sunglasses', 'face'],
    ['smoky_makeup', 'face'],
  ])
); // 3

// 메모
// 경우의 수를 계산하는 식을 만들어내지 못했다.
// https://school.programmers.co.kr/questions/33347 답변을 참고
// 옷의 종류가 3가지고 각각의 옷의 개수가 a, b, c라면 (x + a)(x + b)(x + c) = x3 + (a + b + c)x2 + (ab + bc + ca)x + (abc)라는 식이 정립된다.
// 계수의 합을 구하기 위해서는 x에 1을 할당하고 맨 앞의 x3는 정답에 포함되지 않기 때문에 마지막에 1을 빼준다.
// 따라서 옷의 갯수는 항상 +1 되어야 하므로 초기 값을 2로 할당.
