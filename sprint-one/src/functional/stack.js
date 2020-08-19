var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};

  someInstance.i = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    someInstance.storage[someInstance.i] = value;
    someInstance.i++;
  };

  someInstance.pop = function() {
    someInstance.i--;
    if (someInstance.i < 0) {
      someInstance.i = 0;
    }
    let res = someInstance.storage[someInstance.i];
    delete someInstance.storage[someInstance.i];
    return res;
  };

  someInstance.size = function() {
    return someInstance.i;
  };

  return someInstance;
};
