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
// arr.at(i) тоже что и arr[i] но i может быть отрицательным

// .pop() удалить последний эл
// .push() добавить эл в конец
// .shift() удалить первый эл
// .unshift() добавить эл в начало