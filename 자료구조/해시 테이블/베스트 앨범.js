// 풀이
// 장르 별로 노래를 묶는다.
// 많이 재생된 순으로 노래를 정렬한다.
// 최대 2곡 까지만 수록한다.
// 많이 재생된 장르 순으로 고유 번호를 담아 반환한다.
function solution(genres, plays) {
  const genreMap = new Map();

  // 장르 별로 요구사항에 맞게 노래를 정렬
  genres.forEach((_, index) => {
    const genre = genres[index];
    const play = plays[index];

    if (genreMap.has(genre)) {
      genreMap.set(genre, {
        totalPlay: genreMap.get(genre).totalPlay + play,
        songs: [...genreMap.get(genre).songs, { play, index }]
          .sort((a, b) => b.play - a.play)
          .slice(0, 2),
      });
    } else {
      genreMap.set(genre, {
        totalPlay: play,
        songs: [{ play, index }],
      });
    }
  });

  // 많이 재생된 장르 순으로 고유 번호를 담는다.
  const res = [...genreMap]
    .sort((a, b) => b[1].totalPlay - a[1].totalPlay)
    .flatMap(item => item[1].songs)
    .map(song => song.index);

  return res;
}

console.log(
  solution(
    ['classic', 'pop', 'classic', 'classic', 'pop'],
    [500, 600, 150, 800, 2500]
  )
);

// 메모
// 해시 테이블의 경우에는 Map 자료구조를 사용하면 다양한 메서드를 제공하기 때문에 용이하다.
