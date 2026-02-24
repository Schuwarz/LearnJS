alert(сообщение);
prompt(вопрос, [default ]);
confirm(вопрос);

String(значение);
Number(значение);
Boolean(значение);

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

if (условие) { ... } else { ... };

let result = условие ? ... : ...;

while (условие) { ... }

while (i) это while (i != 0)

  do { ... } while (условие)

for (начало; условие; шаг) { ... }
break - прерываем цикл
continue - переходим на следующую итерацию
labelName: for ( ... ) { ... }
break\continuue labelName - остановит нужный цикл

switch (x) { case 'значение1': ... break; case 'значение2': ... break; default: ... break; }

// Функции

function имя(параметры) { ... }           // Function Declaration

let имя = function (параметры) { ... };    // Function Expression

let имя = (параметры) => ...;             // arrow functions

// Параметр – это переменная, указанная в круглых скобках в объявлении функции.
// Аргумент – это значение, которое передаётся функции при её вызове.
// Function Expression создаётся, когда выполнение доходит до него, и затем уже может использоваться.
// Function Declaration может быть вызвана раньше, чем она объявлена.
// В строгом режиме, когда Function Declaration находится в блоке {...}, функция доступна везде внутри блока. Но не снаружи него.

// Объекты

let user = new object();          // конструктор объекта
let user = {};                    // литерал объекта или литеральная нотация
let user.name = 'znachenie'
delete user.name
user[dva slova] = "znachenye"

name,                             // то же самое, что и name: name

  "key" in object                   // Проверка, свойства в объекте

for (let key in object) { ... }

// Метод объекта - Функция, которая является свойством объекта
// Когда мы пишем наш код, используя объекты для представления сущностей реального мира – ООП

// this

function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Jack");

// Массивы

let arr = new Array();
let arr = [];

// очередь - добавлять в конец, удалять в начале
// стек - добавлять в конце, удалять в конце

for (let i = 0; i < arr.length; i++) {... }

for (let item of arr) {... }

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

alert(matrix[1][1]);


String(arr) // возвращает строку '1,2,3'


// Сборка мусора

// Сборщик мусора. Чистит недостижимые объекты
// Сборка по поколениям (Generational collection)
// Инкрементальная сборка (Incremental collection)
// Сборка в свободное время (Idle-time collection)

// !!! Потерял конспект по темам Конструктор, оператор "new" и Опциональная цепочка '?.'


let id = Symbol("id");

let obj = {
  prop: '123',
  [id]: 123,
}

// Хинт - преобразование типов. string, number, default

Symbol.toPrimitive

obj[Symbol.toPrimitive] = function (hint) {
  код для преобразования
  возвращает примитивное значение
  hint = чему - то из "string", "number", "default"
}


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

// ===================================
//    Повторяем стрелочные функции
// ===================================

// Не имеют this.
// Не имеют arguments.
// Не могут быть вызваны с new.

// ===================================
//        Введение: колбэки
// ===================================

// Многие действия в JavaScript асинхронные
// Ассинхронные функ. - действие (загрузка скрипта) будет завершено не сейчас, а потом
// callback — передаваемый аргумент в функ., функция, которая будет вызвана по завершению асинхронного действия.
// error-first callback - Первый аргумент функции callback зарезервирован для ошибки. Второй и последующие аргументы — для результатов выполнения.

// ===================================
//              Промисы
// ===================================

let promise = new Promise(function (resolve, reject) {
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
  function (result) { /* обработает успешное выполнение */ },
  function (error) { /* обработает ошибку */ }
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
  return new Promise(function (resolve, reject) {
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


// ===================================
//            Async/await
// ===================================

// async - возвращает промис

async function f() {
  return 1;
}

async function f() {
  return Promise.resolve(1);
}

f().then(alert) // 1

// await - только внутри async-функций, ждет пока промис не выполнитсья и возвращает результат

let value = await promise;

// Пример

async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Готово"), 1000)
  });

  let result = await promise; // Ждет промис

  alert(result);
}

f();

// await promise - возвращает результат. Если ошибка возвращает промис с reject

async function f() {
  let response = await fetch('...');
}

// f() вернёт промис в состоянии rejected
f().catch(alert); // TypeError: failed to fetch // (*)

// ===================================
//              Fetch
// ===================================

let promise = fetch(url);

// запрашивает по сети url и возвращает промис. Промис возвращает объект response после того, как удалённый сервер присылает заголовки ответа, но до того, как весь ответ сервера полностью загружен.

// AJAX - Asynchronous JavaScript And XML. Сетевые запросы на сервер

let promise = fetch(url, [options])
// url - для отправки запроса
// options - доп. параметры: метод, заголовки и тд.

// возвращает промис

// 1. promise выполняется с объектом встроенного класса Response в качестве результата, как только сервер пришлёт заголовки ответа.

// status - код статуса HTTP-запроса
// ok - логическое значение: будет true, если код HTTP-статуса в диапозоне 200-299

// Пример
let response = await fetch(url);

if (response.ok) {
  let json = await response.json();
} else {
  alert("Ошибка HTTP: " + response.status)
}

// 2. для получения тела ответа нам нужно использовать дополнительный вызов метода.

let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
let response = await fetch(url);

let commits = await response.json();

alert(commits[0].author.login);

// Пример на промисах

fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
  .then(response => response.json())
  .then(commits => alert(commits[0].author.login))

// Заголовки ответа храняться в response.headers
// Можно использовать методы Map

// Пример

let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');

alert(response.headers.get('Content-Type'));    // Получить 1 заголовок

for (let [key, value] of response.headers) {    // Перебрать все заголовки
  alert(`${key} = ${value}`);
}

// Для установки заголовка запроса в fetch мы можем использовать опцию headers. Она содержит объект с исходящими заголовками

let response = fetch(protectedUrl, {
  headers: {
    Authentication: 'secret'
  }
});

// ========== POST-запросы ==========

// fetch параметры:
// method - HTTP метод (напр. POST)
// body - тело запроса, одно из:
// строка (напр. JSON)
// объект FormData
// Blob/BufferSource
// URLSearchParams

// Пример с JSON
let user = {
  name: 'John',
  surname: 'Smith'
};

let response = await fetch('/article/fetch/post/user', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(user)
});

let result = await response.json();
alert(result.message);

// ========== ИТОГО ==========

// fetch запрос состоит из 2х операторов await
let response = await fetch(url, options); // завершается с заголовками ответа
let result = await response.json();       // читать тело ответа в формате JSON

// без await
fetch(url, options)
  .then(response => response.json())
  .then(result => /* обрабатываем результат */)

// параметры ответа:
response.status  // HTTP-код ответа
response.ok      // true, если статус ответа в диапазоне 200-299
response.headers // похожий на Map объект с HTTP-заголовками

// методы для получения тела ответа:
response.text()         // возвращает ответ как обычный текст
response.json()         // декодирует ответ в формате JSON
response.formData()     // возвращает ответ как объект FormData
response.blob()         // возвращает объект как Blob
response.arrayBuffer()  // возвращает ответ как ArrayBuffer

// опции fetch:
method  // HTTP-метод
headers // объект с запрашиваемыми заголовками
body    // данные для отправки (тело запроса) в виде текста, FormData, BufferSource, Blob или UrlSearchParams.

// ===================================
//        Fetch: ход загрузки
// ===================================

// fetch позволяет отслеживать процесс получения данных
// response.body - свойство, чтобы отслеживать ход загрузки данных с сервера
// ReadableStream("Поток чтения") - особый объект, который предоставляет тело ответа по частям, по мере поступления.

const reader = response.body.getReader(); // Вместо response.json()

while (true) {
  const { done, value } = await reader.read();

  if (done) { break; }

  console.log(`Получено ${value.length} байт`)
}
// done становиться true в последнем фрагменте
// value - Uint8Array из байтов каждого фрагмента

// Результат await reader.read() - объект с 2мя св-ми:
// done - true, когда чтение закончено, иначе false
// value - типизированный массив данных ответа Uint8Array

// рабочий пример

let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits?per_page=100');
const reader = response.body.getReader();
const contentLength = +response.headers.get('Content-Length')
let receivedLength = 0;
let chunks = [];

while (true) {
  const { done, value } = await reader.read();
  if (done) { break; }
  chunks.push(value);
  receivedLength += value.length;
  console.log(`Получено ${receivedLength} из ${contentLength}`);
}

let chunksAll = new Uint8Array(receivedLength);
let position = 0;
for (let chunk of chunks) {
  chunksAll.set(chunk, position);
  position += chunk.length;
}

let result = new TextDecoder("utf-8").decode(chunksAll);
let commits = JSON.parse(result);
alert(commits[0].author.login);

// ===================================
//      Fetch: прерывание запроса
// ===================================

// AbortController - универсальный объект, для отмены асинхронных задач

// ========== 1. Cоздаём контроллер ==========

let controller = new AbortController();
let signal = controller.signal;

// Метод abort()
// Св-во .signal

// вызов abort() - создает событие abort в controller.signal, а cв-во controller.signal.aborted становится true

signal.addEventListener('abort', () => alert("отмена!")); // срабатывает при вызове controller.abort()
controller.abort(); // отмена!
alert(signal.aborted); // true

// ========== 2. Передаем св-во signal опцией в метод fetch ==========

let controller = new AbortController();
fetch(url, {
  signal: controller.signal
});

// ========== 3. Прерывание запроса fetch ==========

controller.abort(); // fetch получает событие из signal и прерывает запрос. Промис завершается с ошибкой

// Ошибку надо обработать, например, в try..catch

// AbortController – масштабируемый, он позволяет отменить несколько вызовов fetch одновременно.

let urls = [...];                           // список URL для параллельных fetch
let controller = new AbortController();

let fetchJobs = urls.map(url => fetch(url, {
  signal: controller.signal
}));

let results = await Promise.all(fetchJobs);  // если откуда-то вызвать controller.abort(), то это прервёт все вызовы fetch

// Если есть собственные ассинхронные задачи, нужно слушать его событие abort

let ourJob = new Promise((resolve, reject) => {         // наша задача
  controller.signal.addEventListener('abort', reject);
});

let results = await Promise.all([...fetchJobs, ourJob]); // controller.abort() прервёт все вызовы fetch и наши задачи

// ===================================
//      Fetch: запросы на другие сайты
// ===================================

// Очень загруженный день...

// угу...

// а сегодня вообще праздник...

// тяжелый рабочий день...