// Object.assign(dest, [src1, src2, src3...]) копирует свойства объектов src в объект dest

/*
user = {
  sayHi: function() {
    alert("Привет");
  }
};

user = {
	sayHi() {
		alert('Hello');
	}
};
*/

// alert(id.toString());
// alert(id.description);

// Symbol.for(key) Проверяем глобальный реестр и возвращаем или создаем новый символ по имени

// Symbol.keyFor(sym) Принимает глобальный символ и возвращает его имя.

// toString(base) base-система счисления

// Math.floor(x) округление в меньшую
// Math.ceil(x) в большую
// Math.round(x) до целого
// Math.trunc(x) удаление дробной

// toFixed(n) n-цифры после запятой

// isNaN(value)
// Number.isNaN(value)

// isFinite(value)
// Number.isFinite(value)

// Object.is(a, b) (Nan === NaN)true (0 === -0)false

// parseInt(str, base) возвращает число из строки
// parseFloat() возвращает число с точкой

// Math.random()
// Math.max(a, b, ..)
// Math.min(a, b, ..)
// Math.pow(n, power)

// str.at(pos)

// .toLowerCase()
// .toUpperCase()

// str.indexOf(substr, pos)
// str.lastIndexOf(substr, position)
// str.includes(substr, pos)
// str.startsWith()
// str.endsWith()
// str.slice(start, end)
// str.substring(start, end)
// str.substr(start, lenght)
// str.codePointAt(pos)
// String.fromCodePoint(code)
// str.localeCompare(str2)
// str.trim()
// str.repeat(n)

// .lenght

// Методы массивов

let arr = [1, 2, 3, 4];
arr.at(1)                                   // 2
arr.push(5)                                 // Добавляет эл в конец [1, 2, 3, 4, 5]
arr.pop()                                   // удаляет последний эл [1, 2, 3]
arr.fill(1)                                 // Заполняет все эл: [1, 1, 1, 1]
arr.shift()                                 // удаляет первый эл [2, 3, 4]
arr.unshift(5)                              // добавляет эл в начало [5, 1, 2, 3, 4]
arr.reverse()                               // Задом наперед: [4, 3, 2, 1]
arr.includes(2)                             // если в массиве есть: true
arr.map(item => item*2)                     // Возвращает массив результатов: [2, 4, 6, 8]
arr.filter(item => item > 2)                // Фильтрует и возвращает массив: [3, 4]
arr.find(item => item > 2)                  // Ищет эл: 3(Первое совпадение)
arr.every(item => item > 0)                 // true
arr.reduce( (sum, curr) => sum + curr, 0)   // Сумма всех эл: 10
arr.reduceRight()                           // Аналогично, справа-налево
arr.toString()
arr.join(' * ')                             // Соединяет в строку: '1 * 2 * 3 * 4'
arr.splice(2, 1, 'i', 'j')                  // Удаляет\Заменяет\Добавляет эл [1, 2, 'i', 'j', 4]
arr.slice(1, 4)                             // Копирует эл от [1] до [4-1]
arr.concat(['i', 'j'])                      // Копирует и добавляет эл в новый массив: [1, 2, 3, 4, 'i', 'j']
arr.indexOf(2)                              // Возвращает эл: 1
arr.lastIndexOf(3)                          // Возвращает эл(ищет с конца): 4
arr.findIndex(item => item === 2)           // Возвращает индекс: 1
arr.findLastIndex(item => item === 3)       // Возвращает индекс(ищет с конца): 2
arr.isArray()                               // true
arr.sort()                                  // Сортирует эл как строки
arr.sort( (a, b) => a - b )                 // Числовая сортировка по возрастанию
arr.sort( (a, b) => b - a )                 // Числовая сортировка по убыванию
arr.sort( (a, b) => a.localeCompare(b) )    // Правильная сортировка строк
arr.sort( (a, b) => 0.5 - Math.random() )   // Рандомная сортировка

// если в obj есть [Symbol.isConcatSpreadable]: true добавиться concat
// .forEach(function(item, index, array) {...}) запустить функцию для каждого эл массива
// str.split(delim) разбивает строку на массив по заданному разделителю

Array.from(arrLike)                         // Псевдомассив -> массив

// Методы map

new Map()           // Создает коллекцию
map.set(key, value) // Записывает value по key
map.get(key)        // Возвращает value
map.has(key)        // Возвращает true
map.delete(key)     // Удаляет пару key/value
map.clear()         // Очищает от всех эл
map.size            // Возвращает кол-во эл
map.keys()          // Возвращает объект по key
map.values()        // Возвращает объект по value
map.entries()       // Возвращает объект по парам key/value

// forEach так же работает для map
// Object.enries(obj) Метод возвращает массив key-value из которого можно создать map
// Object.fromEntries(arr) Возвражает объект

// Методы set

new Set(iterable)   // Создает коллекцию
set.add(value)      // Дабавляет значение
set.delete(value)   // Удаляет значение, возвращает true\false
set.has(value)      // Возвращает true
set.clear()         // Очищает от всех эл
set.size            // Возвращает кол-во эл
set.values()
set.keys()
set.entries()

// for..of \ forEach работает для set