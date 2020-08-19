var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var i = 0; //top
  var j = 0; //bottom

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[i] = value;
    i++;

  };

  someInstance.dequeue = function() {
    if (j < i) {
      let res = storage[j];
      delete storage[j];
      j++;
      return res;
    }
  };

  someInstance.size = function() {
    return i - j;
  };

  return someInstance;
};
