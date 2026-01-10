"use strict";

// alert(message);

// prompt(question, [default]);

// confirm(question);

// String(value);

// Number(value);

// Boolean(value);

// Остаток от деления %

// Возведение в степень **

// alert(+true); // 1

// += *= ++ --

// != !== == ===

// if (условие) {значение1;} else {значение2;};

// let result = условие ? значение1 : значение2;

// result = a || b;

// true || alert("Никогда не сработает");
// false || alert("Сработает");

// a ||= b;

// a || (a = b);

// result = a && b;

// a &&= b;

// result = !value;

// !true это false

// !!null это false

// result = a ?? b;

// result = (a !== null && a !== undefined) ? a : b;

// a ??= b

// while (condition) { тело цикла }

// while (i) это while (i != 0)

// do { тело цикла } while (condition)

// for (начало; условие; шаг) { тело цикла }

// break - прерываем цикл

// continue - переходим на следующую итерацию

// labelName: for (...) { ... }

// break\continuue labelName - остановит нужный цикл

// switch(x) {case 'value1': ... break; case 'value2': ... break; default: ... break; }

// function имя(параметры) { тело функции }      (Function Declaration)

// Параметр – это переменная, указанная в круглых скобках в объявлении функции.
// Аргумент – это значение, которое передаётся функции при её вызове.

// let имя = function(параметры) { тело функции };       (Function Expression)

// Function Expression создаётся, когда выполнение доходит до него, и затем уже может использоваться.
// Function Declaration может быть вызвана раньше, чем она объявлена.
// В строгом режиме, когда Function Declaration находится в блоке {...}, функция доступна везде внутри блока. Но не снаружи него.

// let имя = (параметры) => тело функции;         (arrow functions)

// «Если код настолько запутанный, что требует комментариев, то, может быть, его стоит переделать?»

// Выносить код в функции.

// let user = new object(); конструктор объекта
// let user = {}; литерал объекта или литеральная нотация
// let user.name = 'znachenie'
// delete user.name
// user[dva slova] = "znachenye"

// name, // то же самое, что и name: name

// "key" in object // Проверка, свойства в объекте

// for (let key in object) { ... }

// Сборщик мусора. Чистит недостижимые объекты
// Сборка по поколениям (Generational collection)
// Инкрементальная сборка (Incremental collection)
// Сборка в свободное время (Idle-time collection)

// Метод объекта - Функция, которая является свойством объекта 

// Когда мы пишем наш код, используя объекты для представления сущностей реального мира – ООП

// Для доступа к информации внутри объекта метод может использовать ключевое слово this

/*
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");
*/

// !!! Потерял конспект по темам Конструктор, оператор "new" и Опциональная цепочка '?.'

/*
let id = Symbol("id");

let obj = {
  prop: '123',
  [id]: 123,
}

// Хинт - преобразование типов. string, number, default

// Symbol.toPrimitive

/* obj[Symbol.toPrimitive] = function(hint) {
  код для преобразования
  возвращает примитивное значение
  hint = чему-то из "string", "number", "default"
}
*/

// toString (приоритет для string) / valueOf (приоритет для number)

// по умолчанию toString -> [object Object]

// по умолчанию valueOf -> сам объект

// У примитивов есть методы, для этого создается объект обертка (сам)

// let n = 1_000_000_000 = 1e9
// let n = 0.000001 = 1e-6
// let n = 0xFF
// let n = 0b11111111;
// let n = 0o377;

// alert(`... ${...}`)
/* 
let guestList = `Guests:
  * John
  * Pete 
  * Mary 
`;
*/

// \n символ перевода строки
// let guestList = "Guests:\n * John\n * Pete\n * Mary";

// str.length

// for (let char of "Hello") {...}

// ~ побитовое НЕ

// alert( 'a' > 'Z' ); true
// alert( 'Österreich' > 'Zealand' ); true

// МАССИВЫ

// let arr = new Array();
// let arr = [];

// очередь - добавлять в конец, удалять в начале
// стек - добавлять в конце, удалять в конце

/*
for (let i=0; i<arr.length; i++) {...}

for (let item of arr) {...}
*/

/* let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

alert( matrix[1][1] );
*/

// String(arr) возвращает строку '1,2,3'

// !!! Скипнул задачки на Методы массивов