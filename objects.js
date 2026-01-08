let calculator = {

	read() {
		this.a = +prompt('a = ', '');
		this.b = +prompt('b = ', '');
	},

	sum() {
		return this.a + this.b;
	},

	mul() {
		return this.a * this.b;
	}

};

let ladder = {
  step: 0,

  up() {
    this.step++;
    return this;
  },

  down() {
    this.step--;
    return this;
  },

  showStep() {
    alert( this.step );
    return this;
  }
};

let user = {
  a: 0,
  b: 0,
  sum: 0,

  readNumber(a, b) {
    this.a = +prompt('a','');
    this.b = +prompt('a','');
  },

  getSum() {
    this.sum = this.a + this.b;
  },

  showSum() {
    alert( this.sum );
  },
}