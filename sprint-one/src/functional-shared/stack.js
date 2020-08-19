var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.i = 0;

  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.i] = value;
    this.i++;
  },
  pop: function(value) {
    this.i--;
    if (this.i < 0) {
      this.i = 0;
    }
    let res = this.storage[this.i];
    delete this.storage[this.i];
    return res;
  },
  size: function(value) {
    return this.i;
  }
};
