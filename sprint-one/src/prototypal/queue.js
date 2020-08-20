var Queue = function() {
  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.i = 0;
  instance.j = 0;
  return instance;

};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.i] = value;
    this.i++;
  },
  dequeue: function(value) {
    if (this.j < this.i) {
      let res = this.storage[this.j];
      delete this.storage[this.j];
      this.j++;
      return res;
    }
  },
  size: function(value) {
    return this.i - this.j;

  }

};
