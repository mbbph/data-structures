class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.i = 0;
    this.j = 0;
  }

  enqueue(value) {
    this.storage[this.i] = value;
    this.i++;
  }

  dequeue(value) {
    if (this.j < this.i) {
      let res = this.storage[this.j];
      delete this.storage[this.j];
      this.j++;
      return res;
    }
  }
  size() {
    return this.i - this.j;
  }
}
