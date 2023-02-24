// function solution(numbers) {
//   var answer = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     answer = answer + numbers[i];
//   }
//   averge = Math.floor((answer / numbers.length) * 10) / 10;
//   console.log(averge);
// }

// solution([1, 2, 3, 6, 4, 7, 8, 9, 10]);

// 삼항연산자.js

let a = 1;
let isNumber = typeof a === "number" ? "숫자임" : "문자임";

console.log(isNumber);

// 자료형(유사 참/거짓)
console.log(typeof true); // boolean(참/거짓)

// Boolean(값) -> 참, 거짓 판별
console.log("{} = " + Boolean({})); // {} 참 거짓 판별
console.log("[] = " + Boolean([]));
console.log('"" = ' + Boolean(""));

// 문자값 유무 확인
let name;
console.log(name);
// 빈값이면 거짓
if (name) {
  console.log("반값습니다 " + name + "님");
} else {
  console.log("이름값이 없습니다");
}
