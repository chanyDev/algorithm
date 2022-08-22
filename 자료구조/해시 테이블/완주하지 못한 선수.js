// 풀이
// 참여 선수, 완주 선수를 정렬
// 완주 선수는 항상 참여 선수보다 한명 적기 때문에 순회하며 일치 여부를 확인, 일치하지 않으면 참여 선수를 반환
// 모두 일치하면 참여 선수 중 마지막 선수를 반환
function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < completion.length; i++) {
    if (completion[i] !== participant[i]) {
      return participant[i];
    }
  }

  return participant[participant.length - 1];
}

console.log(solution(['leo', 'kiki', 'eden'], ['eden', 'kiki'])); // leo
console.log(
  solution(
    ['marina', 'josipa', 'nikola', 'vinko', 'filipa'],
    ['josipa', 'filipa', 'marina', 'nikola']
  )
); // vinko
console.log(
  solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav'])
); // mislav
