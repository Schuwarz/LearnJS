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