const foods = ["김밥", "만두", "순대"];
// console.log(foods);

// for(let i = 0; i < foods.length; i++){
//     console.log(foods[i]);
// }

let foodName = foods.map(function (값) {
  //console.log(값);
  return 값;
});

console.log(foodName);

//fiter() 특정한 자료를 가져올 때

let likefood = foods.filter((값) => {
  return 값 === "만두";
});
console.log(likefood);

//배열 번호 참조
const animals = ["개", "고양이", "돼지", "소", "말", "댕댕"];
animals.map(function (add, ne) {
  console.log(ne, add);
});
