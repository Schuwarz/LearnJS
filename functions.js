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