
// 1) Создайте функцию, которая в качестве аргумента будет принимать имя, а возвращать строчку ‘Hello “аргумент функции”’.
// 2) Создайте массив чисел, далее создайте функцию, которая будет принимать в качестве аргумента массив чисел. Функция должна перебирать полученный массив и если число больше 10 - выводить это число в консоль.
// 3) Предлагаю вам реализовать простенький калькулятор. Создайте функцию, которая будет принимать три аргумента, два числа и строку для выбора оператора. При вызове функции пользователь передает, например, (2, 3, ‘minus’), внутри функции происходит проверка на знак и в данном случае функция должна вернуть -1. То есть мы получаем разницу между первым и вторым аргументом. Запишите результат выполнения функции в переменную и выведите в консоль. Подобным образом реализуйте 4 математические операции: сложение, вычитание, умножение и деление.



function hello(name) {
  console.log(`Hello ${name}`)
}

hello('Ann')

// --------------------------------------------

let array = [1, 4, 11, 2, 3, 12, 5, 6, 13, 10]

function comprasion(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      console.log(array[i])
    }
  }
}

comprasion(array)

// ----------------------------------------------

function subtraction(firstNumber, secondNumber, string) {
  if (string === 'minus') {
    let result = firstNumber - secondNumber
    return result
  }
  return 'error'
}

console.log(subtraction(2, 3, 'minus'))


function addition(firstNumber, secondNumber, string) {
  if (string === 'plus') {
    let result = firstNumber + secondNumber
    return result
  }
  return 'error'
}

console.log(addition(2, 3, 'plus'))


function multiplication(firstNumber, secondNumber, string) {
  if (string === 'multiply') {
    let result = firstNumber * secondNumber
    return result
  }
  return 'error'
}

console.log(multiplication(2, 3, 'multiply'))


function division(firstNumber, secondNumber, string) {
  if (string === 'divide') {
    let result = firstNumber / secondNumber
    return result
  }
  return 'error'
}
console.log(division(3, 3, 'divide'))




















