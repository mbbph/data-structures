class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.i = 0;

  }

  push(value) {
    this.storage[this.i] = value;
    this.i++;
  }

  pop(value) {
    this.i--;
    if (this.i < 0) {
      this.i = 0;
    }
    let res = this.storage[this.i];
    delete this.storage[this.i];
    return res;
  }

  size(value) {
    return this.i;
  }


}
