var Stack = function() {
  var instance = Object.create(stackMethods);
  instance.storage = {};
  instance.i = 0;
  return instance;
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
