// 1) Создайте объект с вашим описанием(имя, возраст и т.д.).
// 2) Создайте метод объекта, который в качестве аргумента будет принимать имя и возвращать строку ‘Hello “переданный аргумент”’.
// 3) Создайте массив объектов с описанием пользователей(такой мы делали в уроке). Объявите отдельную переменную, в которой будет храниться количество простых пользователей, начальное значение будет - 0. Обойдите массив пользователей и если пользователь не является админом - прибавьте к ранее созданной переменной единицу. После окончания работы цикла выведите в консоль переменную с количеством простых пользователей

const user = {
  name: 'Mike',
  age: 25,
  isAdmin: false,
  sayHello(name) {
    console.log(`Hello ${name}`)
  }
}

user.sayHello('Ann')
user.sayHello('John')

// -------------------------------------------------------------------------

const users = [
  {
    name: 'alex',
    age: 23,
    isAdmin: true
  },
  {
    name: 'bob',
    age: 25,
    isAdmin: false
  },
  {
    name: 'ann',
    age: 30,
    isAdmin: false
  },
  {
    name: 'kobe',
    age: 21,
    isAdmin: true
  },
]

let nonAdmin = 0

for (let i = 0; i < users.length; i++) {
  if (users[i].isAdmin === false) {
    nonAdmin++
  }
}

console.log(`Кол-во простых пользователей = ${nonAdmin}`)


