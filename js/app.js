// 101- MASALA
// function namuna(n) {
//   let result = (n * (n + 1)) / 2;
//   return result;
// }
// console.log(namuna(7));

// 102- MASALA
// let object = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let objMin = +prompt("minumum raqamni kiriting");
// let objMax = +prompt("maxsimum raqamni kiriting");
// let num = +prompt(" raqamni kiriting");
// function kattami(number) {
//   return objMin <= number && number <= objMax;
// }
// console.log(kattami(num, object));

// 103- MASALA
// function oxirgiSon(number) {
//   let result = number * number;
//   return result % 10 === number;
// }
// console.log(oxirgiSon(7));

// 104- MASALA
// let massiv = [0, 0, 0, 0, 0];
// function indexTopish(arr) {
//   let result = arr.map((element, index) => element + index);
//   return result;
// }
// console.log(indexTopish(massiv));

// 105- MASALA
// let massiv = ["cola", "water", "fanta"];
// function ichimliklar(arr) {
//   const shakarlar = ["cola", "fanta"];
//   const natija = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!shakarlar.includes(arr[i])) {
//       natija.push(arr[i]);
//     }
//   }
//   return natija;
// }
// console.log(ichimliklar(massiv));

// 106- MASALA
// let raqam = 235;
// function raqamSoni(son) {
//   const sonStr = String(son);
//   return sonStr.length;
// }
// console.log(raqamSoni(raqam));

// 107- MASALA
// function engKattaHosil(son) {
//   let sonStr = String(son);
//   let yangiSon = sonStr
//     .split("")
//     .sort((a, b) => b - a)
//     .join("");
//   return yangiSon;
// }
// console.log(engKattaHosil(123));

// 108- MASALA
// function randomOraliqdagiSon(son1, son2) {
//   const minSon = son1;
//   const maxSon = son2;
//   const tasodifiySon =
//     Math.floor(Math.random() * (maxSon - minSon + 1)) + minSon;
//   return tasodifiySon;
// }
// console.log(randomOraliqdagiSon(3, 18));

// 110- MASALA
// function kattaHarflarSoni(matn) {
//   let kattaHarf = 0;
//   for (let i = 0; i < matn.length; i++) {
//     if (matn[i] >= "A" && matn[i] <= "Z") {
//       kattaHarf++;
//     }
//   }
//   return kattaHarf;
// }
// console.log(kattaHarflarSoni("SalOM"));
