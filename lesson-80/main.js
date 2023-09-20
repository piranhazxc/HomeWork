// 1) Выведите в консоль четные числа от 2 до 12, используйте цикл for и условие.
// 2) При помощи цикла for выведите в консоль числа от 10 до 1, в обратном порядке.
// 3) Перепишите 1 и 2 цикл используя цикл while.


for (let i = 2; i <= 12; i = i + 2) {
  console.log(i)
}

for (let i = 10; i > 0; i = i - 1) {
  console.log(i)
}

let i = 2
while (i <= 12) {
  console.log(i)
  i = i + 2
}

let index = 10
while (index > 0) {
  console.log(index)
  index = index - 1
}