console.log('20251011_3_javascript.js' 파일 실행중);

// 점수 계산하는 함수. => 총점과 평균을 구하는 함수
// => 숫자로 이루어진 배열을 매개변수로 전달 받는 함수
// => 반환값(return)값이 없는 함수
function score(scoreArray) {
  // scoreArray의 점수들을 다 더한 총점과 평균을 나타낸다.
  let add = 0;
  let avg = 0;
  for (let i = 0; i < scoreArray.length; i++) {
    add += scoreArray[i];
  }
  avg = add / scoreArray.length;
  console.log('총점 : ' + add);
  console.log('평균 : ' + avg);   
}

//

// 1. A반 학생들의 점수
let classA = [80, 90, 100, 75];
score(classA);

// 2. B반 학생들의 점수
let classB = [65, 88, 92, 78, 95];
score(classB);

// 점수 계산 함수 (총점과 평균 출력) - 람다 함수 버전
const score = (scoreArray) => {
  let add = 0;
  for (let i = 0; i < scoreArray.length; i++) {
    add += scoreArray[i];
  }
  let avg = add / scoreArray.length;
  console.log('총점 : ' + add);
  console.log('평균 : ' + avg);
};

// 1. A반 학생들의 점수
let classA = [80, 90, 100, 75];
score(classA);

// 2. B반 학생들의 점수
let classB = [65, 88, 92, 78, 95];
score(classB);

const score = (scoreArray) => {
  const add = scoreArray.reduce((acc, cur) => acc + cur, 0);
  const avg = add / scoreArray.length;
  console.log(`총점 : ${add}`);
  console.log(`평균 : ${avg}`);
};