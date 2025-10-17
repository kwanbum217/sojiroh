// 구구단 출력하기

// 단을 입력받고 해당 단의 구구단을 출력한다.
let dan = number(prompt("===== 단 입력 ====="))
// 
console.log(" ==== " + dan + "단 ==== ");

// 구구단을 출력하는 반복문을 만든다.
for(let i = 1; i <= 9; i += 1) {
  console.log(dan + " x " + i + " = " + dan * i);    
}