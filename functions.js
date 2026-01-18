function isEmpty(obj) {
	for (let key in obj) {
		return false;
	}
	return true;
}


function calcSum(obj) {
	let sum = 0;

	for (let key in obj) {
		sum += obj[key];
	}

	return sum;
}


function isNumber(n) {
	if ((typeof n) == "number") {
		return true;
	} else {
		return false;
	};
}

function multiplyNumeric(obj) {
	for (let key in obj) {

		if ( isNumber(obj[key]) ) {
			obj[key] *= 2;
		}
	}
}

function Calculator() {
	this.read = function() {
		this.a = +prompt('a = ', '');
		this.b = +prompt('b = ', '');
	};

	this.sum = function() {
		return this.a + this.b;
	};

	this.mul = function() {
		return this.a * this.b;
	};
}

function Accumulator(startingValue) {
	this.value = startingValue;

	this.read = function() {
		this.value += +prompt('Введите число: ', 0);
	};
}

function readNumber() {
  let n = prompt('Введите число', '');

  if (isNaN(+n) == true) {
    confirm('Еще раз...');
    return readNumber();
  }

  if (n == '' || n === null) {
    return null;
  }

  return n;
}

function getCode(str) {
  str = prompt('Введите символ, чтобы узнать его код UTF-16 ', '');

  alert( str.codePointAt(0) );
}

function ucFirst(str) {
  if (!str) return str;

  str = str[0].toUpperCase() + str.slice(1);

  return str;
}

function getLowerStr(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr;
}

function checkSpam(str) {

  return getLowerStr(str).includes('xxx') 
    || getLowerStr(str).includes('viagra');
}

function truncate(str, maxlength) {
  return (str.length > maxlength ) ?
    str = str.slice( 0, (maxlength - 1) ) + '…' : str;
}

function extractCurrencyValue(str) {
  return +str.slice(1);
}

function getMidArr(arr) {
  return Math.trunc( (arr.length / 2) );
}

function sumInput() {
  let arr = [],
    sum = 0;

  for (;true;) {
    arr.push( prompt('Число?', '') );

    if (arr.at(-1) === '' 
      || arr.at(-1) === null 
      || !isFinite( arr.at(-1) )) {

      arr.pop();
      break;
    }

    sum += parseInt(arr.at(-1));
  }

return sum;
}

function camelize(str) {
  return str
    .split('-')
    .map( 
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1) 
    )
    .join('');
}

function copySorted(arr) {
  return arr
    .slice()
    .sort( (a, b) => a.localeCompare(b) )
}

function показать(строка) {
  alert(строка);
}

function unique(arr) {
  return Array.from(new Set(arr));
}

function суммаЗарплат(объект) {
  return Object
    .values(зарплаты)
    .reduce( (сумма, текущее) => сумма + текущее, 0);
}

function считать(объект) {
  return Object.keys(объект).length;
}

function topSalary(obj) {

  let max = 0;
  let maxName = null;

  for (const [name, salary] of Object.entries(salaries)) {
    if (max < salary) {
      max = salary;
      maxName = name;
    }
  }

  return maxName;
}

function getWeekDay(date) {

  let days = [ 'ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']

  return days[date.getDay()];
}

// скрипт для работы 
{let fromVox = prompt('','');

function arrToMap(arr) {
  let slicedArr = new Array();
  let i = 0;

  for (let item of arr) {
    let pos = item.indexOf(':');

    slicedArr[i] = [item.slice(0, pos), item.slice( ( pos + 2 ) )];
    i++;
  }

  return new Map(slicedArr);
}

function getDate(map, key) {
  let str = map.get(key);
  return str.slice(0, str.indexOf(','));
}

function getTime(map, key) {
  let str = map.get(key);
  return str.slice( (str.indexOf(',') + 2));
}

function clearOfShit (map, key) {
  let str = map.get(key);
  return str.slice( 0, str.indexOf('\r'))
}

function myConvert(str) {
  let map = arrToMap(str.split('\n\r\n'));
  let sortedMap = new Map();

  sortedMap.set('Дата ВУ', getDate(map, 'Дата прошлого ВУ'));
  sortedMap.set('Время ВУ', getTime(map, 'Дата прошлого ВУ'), 'Дата прошлого ВУ' );
  sortedMap.set('Время ВУ', clearOfShit(sortedMap, 'Время ВУ'));
  sortedMap.set('Дата назначения', getDate(map, 'Выполнена в'));
  sortedMap.set('Время назначения', getTime(map, 'Выполнена в'));
  sortedMap.set('Время назначения', clearOfShit(sortedMap, 'Время назначения'));
  sortedMap.set('Действие', 'Назначение ВУ');
  
  return sortedMap;
}

alert(fromVox);

let mapForUser = myConvert(fromVox);

for (let key of mapForUser.keys()) {
  console.log((`${key} -> ${mapForUser.get(key)}`));
}}

function хуй(str) {
  console.log(str);
  alert(str);
}

хуй(JSON.stringify(meetup,
  function replacer(key, value) {
    return (key != '' && value == meetup) ? undefined : value;
  }));

  function sumTo(n, ver) {
  let sum = 0;

  // ver = 1. С использованием цикла
  if (ver === 1) {
    for (let i = n; i != 0; i--) {
      sum += i;
    }
    return sum;
  }

  // ver = 2. С использованием рекурсии
  if (ver === 2) {
    sum = n;
    if (n == 1) {
      return sum;
    } else {
      return sum += sumTo(n - 1, 2);
    }
  }
}