var Queue = function() {
  var someInstance = {};
  someInstance.storage = {};
  someInstance.i = 0;
  someInstance.j = 0;

  _.extend(someInstance, queueMethods);
  return someInstance;

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
