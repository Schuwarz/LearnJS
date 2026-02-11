alert( сообщение );
prompt( вопрос, [default] );
confirm( вопрос );

String( значение );
Number( значение );
Boolean( значение );

alert(+true); // 1

+= *= ++ -- != !== == === % **

result = a || b;
true || alert("Никогда не сработает");
false || alert("Сработает");

a ||= b;
a || (a = b);

result = a && b;

a &&= b;

result = !value;
!true это false
!!null это false

result = a ?? b;
result = (a !== null && a !== undefined) ? a : b;
a ??= b

// Конструкции

if ( условие ) { ... } else { ... };

let result = условие ? ... : ...;

while ( условие ) { ... }

while ( i ) это while ( i != 0 )

do { ... } while ( условие )

for ( начало; условие; шаг ) { ... }
break - прерываем цикл
continue - переходим на следующую итерацию
labelName: for ( ... ) { ... }
break\continuue labelName - остановит нужный цикл

switch(x) {case 'значение1': ... break; case 'значение2': ... break; default: ... break; }

function имя(параметры) { ... }      // Function Declaration
Параметр – это переменная, указанная в круглых скобках в объявлении функции.
Аргумент – это значение, которое передаётся функции при её вызове.

// let имя = function(параметры) { ... };       (Function Expression)

// Function Expression создаётся, когда выполнение доходит до него, и затем уже может использоваться.
// Function Declaration может быть вызвана раньше, чем она объявлена.
// В строгом режиме, когда Function Declaration находится в блоке {...}, функция доступна везде внутри блока. Но не снаружи него.

// let имя = (параметры) => ...;         (arrow functions)

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

// Рекурсия. 
// Ветка, кот. испольняется очевидно - база рекурсии. 
// Ветка, кот. вызывает себя - шаг рекурсии. 
// Общее кол-во вложенных вызовов - глубина рекурсии. Глубина рекурсии = макс. кол-во контекстов в стеке
// Контекст выполнения - специальная внутренняя структура данных, которая содержит информацию о вызове функции.
// 1 вызов - 1 контекст
// Контекст запоминается в стеке контекстов выполнения
// Любая рекурсия может быть переделана в цикл. Как правило, вариант с циклом будет эффективнее.
/*
let company = { // тот же самый объект, сжатый для краткости
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};

function sumSalaries(department) {
  if (Array.isArray(department)) { // случай (1)
    return department.reduce((prev, curr) => prev + curr.salary, 0); // сумма элементов массива
  } else { // случай (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
    }
    return sum;
  }
}
*/

// Связный список - стурктура данных. лемент связного списка определяется рекурсивно как объект с:
// value,
// next – свойство, ссылающееся на следующий элемент связного списка или null, если это последний элемент.
/*
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value:4,
        next: null
      }
    }
  }
};

let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
list.next.next.next.next = null;

list = { value: "new item", next: list }; // добавление нового элемента в список
list.next = list.next.next;               // Удалить из середины
*/

// func(...args) {...} // args - имя массива

// arguments - содержит все парам. функ., псевдомассив

// ...arr при вызове функ. - оператор расширения. Массив -> аргументы. Можно использовать для слияния массивов. Работает только с итерируемыми объектами

// LexicalEnvironment - внутренний объект, лексическое окружение. Содержит ->
// 1. Environment Record – объект, в котором как свойства хранятся все локальные переменные (а также некоторая другая информация, такая как значение this).
// 2. Ссылка на внешнее лексическое окружение – то есть то, которое соответствует коду снаружи (снаружи от текущих фигурных скобок).

// «Переменная» – это просто свойство специального внутреннего объекта: Environment Record. «Получить или изменить переменную», означает, «получить или изменить свойство этого объекта».

// Переменная обновляется в том лексическом окружении, в котором она существует.

// Замыкание – это функция, которая запоминает свои внешние переменные и может получить к ним доступ.

// Если внешняя переменная не используется – она удаляется. Одним из важных побочных эффектов в V8 (Chrome, Edge, Opera) является то, что такая переменная становится недоступной при отладке.

// Скипнул "Устаревшее ключевое слово "var""

// Глобальный объект - переменные и функ. доступные в любом месте программы
// В браузере - window
// Node.js - global
// Универсальное имя - globalThis

// Функ. - объекты

// NFE - Named Function Expression
// let a = function name(p) {...};
// 1. Позволяет функ. ссылаться на себя
// 2. Оно не доступно за пределами функции

// let func = new Function([arg1, arg2, ...argN], functionBody);

// Такая функция имеет доступ только к глобальным переменным

// Если бы new Function имела доступ к внешним переменным, при этом были бы проблемы с минификаторами.

// setTimeout - вызывает функ. 1 раз
// setInterval - вызывает функ. регулярно 

// let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...);
// func|code - функция или строка кода для выполнения
// delay - задержка перед запуском в миллисекундах
// arg1, arg2... - аргументы, передаваемые в функцию.

// clearTimeout(timerId); отменяет

// let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...);
// clearInterval(timerId);

// Вложенный setTimeout позволяет задать задержку между выполнениями более точно, чем setInterval.

// Реальная задержка между вызовами func с помощью setInterval меньше, чем указано в коде!

// Вложенный setTimeout гарантирует фиксированную задержку

// Планирование с нулевой задержкой setTimeout(func,0) или, что то же самое, setTimeout(func) используется для вызовов, которые должны быть исполнены как можно скорее, после завершения исполнения текущего кода.

// Браузер ограничивает 4-мя мс минимальную задержку между пятью и более вложенными вызовами setTimeout, а также для setInterval, начиная с 5-го вызова.

// ########## Повторяем стрелочные функции ##########

// Не имеют this.
// Не имеют arguments.
// Не могут быть вызваны с new.

// ########## Введение: колбэки ##########

// Многие действия в JavaScript асинхронные
// Ассинхронные функ. - действие (загрузка скрипта) будет завершено не сейчас, а потом
// callback — передаваемый аргумент в функ., функция, которая будет вызвана по завершению асинхронного действия.
// error-first callback - Первый аргумент функции callback зарезервирован для ошибки. Второй и последующие аргументы — для результатов выполнения.

// ########## Промисы ##########

let promise = new Promise(function(resolve, reject) {
  // функция-исполнитель (executor)
  // "певец"
});

// resolve и reject – это колбэки, которые предоставляет сам JavaScript
// resolve(value) — если работа завершилась успешно, с результатом value.
// reject(error) — если произошла ошибка, error – объект ошибки.

// У объекта promise, возвращаемого конструктором new Promise, есть внутренние свойства:
// state — вначале "pending", потом меняется на "fulfilled" при вызове resolve или на "rejected" при вызове reject.
// result — вначале undefined, далее изменяется на value при вызове resolve(value) или на error при вызове reject(error).

promise.then(
  function(result) { /* обработает успешное выполнение */ },
  function(error) { /* обработает ошибку */ }
);

// .catch(f) – обработает только ошибку.

// .finally(f) - одна функция выполниться в обоих случаях
// Обработчик, вызываемый из finally, не имеет аргументов. В finally мы не знаем, как был завершён промис. И это нормально, потому что обычно наша задача – выполнить «общие» завершающие процедуры
// Обработчик finally «пропускает» результат или ошибку дальше, к последующим обработчикам.
// Обработчик finally также не должен ничего возвращать

function loadScript(src, callback) {                                              // Код с колбэками
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Ошибка загрузки скрипта ${src}`));

  document.head.append(script);
}

function loadScript(src) {                                                      // код с промисами
  return new Promise(function(resolve, reject) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));

    document.head.append(script);
  });
}

let promise = loadScript("...");  // работа с этим кодом

promise.then(
  script => alert(`${script.src} загружен!`),
  error => alert(`Ошибка: ${error.message}`)
);

promise.then(script => alert('Ещё один обработчик...'));

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