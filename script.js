"use strict";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";

const header = document.querySelector("h1");

let interval = null;

header.onmouseover = event => {
  let повторение = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < повторение) {
          return event.target.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (повторение >= event.target.dataset.value.length) {
      clearInterval(interval);
    }

    повторение += 1 / 3;
  }, 30);
}

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

// Symbol.iterator у объекта, позволяет применить for..of

// Строка - перебираемый объект

// Итерируемые объекты – это объекты, которые реализуют метод Symbol.iterator

// Псевдомассивы – это объекты, у которых есть индексы и свойство length, то есть, они выглядят как массивы.

// map - коллекция ключ/значение, как и Object. Но основное отличие в том, что Map позволяет использовать ключи любого типа.

// Set – это особый вид коллекции: «множество» значений (без ключей), где каждое значение может появляться только один раз.

// WeakMap - ключи это объекты. Не предотвращает удаление объекта. Чаще - доп.хранилище или кеширование

// ... - оператор Остаточные параметры
// let [name1, name2, ...ostalnoe] = ['Петя', 'Саша', 'Пиво', 'Водочка', 'Селедочка'];
// ostalnoe[0] 'Пиво'
// ostalnoe[2] 'Селедочка'
// ostalnoe.length 3

// let {width: w, height: h, title} = {title: "Menu", width: 100, height: 200}
// title 'Menu'
// w 100
// h 200

// let {name: n = 'jopa', ...ostalnoe} = obj
// : n Изменить название
// = 'jopa' Задать зачение по умолчанию
// ...ostalnoe Соберет остальные св-ва

// let {prop : varName = defaultValue, ...rest} = object
// let [item1 = defaultValue, item2, ...rest] = array

// let now = new Date();

// new Date(timestamp) считает миллисекунды от 1 янв 1970 utc+0

// new Date(datestring) считывает строку "2017-01-26"

// new Date(year, month, date, hours, minutes, seconds, ms)

// Date.now(); Аналог new Date().getTime() но более быстрый

// Для получения наиболее достоверных результатов тестирования производительности весь набор бенчмарков нужно запускать по нескольку раз.

// Скипнул задачки на Дата и Время

// В JSON двойные кавычки "" и имена св-в заключаются в кавычки. Может быть применен к примитивам
// JSON поддерживает: Объекты {...}, массивы [...], строки, числа, логические true/false, null
// JSON не поддерживает: св-ва-функции (методы), символьные ключи и значения, св-ва содержащие undefined

// Пример использования функции replacer
/*
alert( JSON.stringify(meetup, function replacer(key, value) {
  alert(`${key}: ${value}`);
  return (key == 'occupiedBy') ? undefined : value;
}));
*/

// Частые ошибки при написании JSON

let json___ = `{
  name: "John",                     // Ошибка: имя свойства без кавычек
  "surname": 'Smith',               // Ошибка: одинарные кавычки в значении (должны быть двойными)
  'isAdmin': false,                 // Ошибка: одинарные кавычки в ключе (должны быть двойными)
  "birthday": new Date(2000, 2, 3), // Ошибка: не допускается конструктор "new", только значения
  "gender": "male"                  // Ошибка: отсутствует запятая после непоследнего свойства
  "friends": [0,1,2,3],             // Ошибка: не должно быть запятой после последнего свойства
}`;                                 // JSON не поддерживает комментарии

// JSON -> obj - десериализация

// Пример с date

/*
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

alert( meetup.date.getDate() ); // 30 - теперь работает!
*/

// ########## Реакт часть, перенести!!!

// Компоненты - js функции, возвращают разметку. Пишуться с большой буквы

// export default - имеет главный компонент файла

// В jsx нужно закрывать все теги, возвращает только 1 тег

// В jsx css-классы объявляются через className

// В jsx можно писать js в {...}

// В jsx можно js в атрибутах src={user.imgUrl}

// В атрибутах можно объекты style={{width: user.imageSize, height: user.imageSize}}

// Можно применять if \ ?

// Для отрисовки списков: цикл for \ метод массива .map()

/*
const products = [                            // Создали массив
  { title: 'Капуста', id: 1 },
  { title: 'Чеснок', id: 2 },
  { title: 'Яблоко', id: 3 },
];

const listItems = products.map(product =>     // Перебрали массив
  <li key={products.id}>                      // У li атрибут key
    {products.title}
  </li>
  );

  return (                                     // Вернули список
    <ul>{listItems}</ul>
  );

*/

// Можно объявлять функ обработчиков событий

/*
function MyButton() {
  function handleClick() {alert('жопа');}

  return (
    <button onClick={handleClick}>              // у handleClick не нужны ()
      Click me
    </button>
  );
}
*/

// Состояние

/*
  import { useState } from 'react';

  function MyButton() {
    const [count, setCount] = useState(0);
    ...
  }
*/

// useState Возвращает текущее состояние something и функ setSomething

// хуки - функ начинающиеся c use. (useState)

// Пропсы - информация передаваемая вниз или вверх компонентам

/*
import {useState} from 'react';

export default function MyApp() {

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton(count, onClick) {
  return (
    <button onClick={onClick}></button>
  )
}
*/