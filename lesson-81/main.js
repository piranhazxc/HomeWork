
// 1) Создайте произвольный массив чисел. Используя цикл for обойдите этот массив и выведите в консоль только четные числа.
// 2) Создайте массив из всех цветов радуги. Используя цикл for обойдите этот массив и выведите в консоль все цвета радуги, но в обратном порядке, p.s. обратите внимание на индексы массивов и стартовую позицию для i.

// -------------------1------------------------------ 
const numbers = [1, 2, 3, 4, 5, 8, 10, 12, 13, 14]


for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    console.log(numbers[i])
  }
}


// -----------------2--------------------------------
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

for (let i = 6; i >= 0; i--) {
  console.log(colors[i])
}