var Queue = function() {
  this.storage = {};
  this.i = 0;
  this.j = 0;
};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

Queue.prototype.enqueue = function(value) {
  this.storage[this.i] = value;
  this.i++;
};



Queue.prototype.dequeue = function(value) {
  if (this.j < this.i) {
    let res = this.storage[this.j];
    delete this.storage[this.j];
    this.j++;
    return res;
  }
};

Queue.prototype.size = function(value) {
  return this.i - this.j;
};
