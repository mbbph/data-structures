

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var overwrite = false;
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) { //set up list of tuples
    this._storage.set(index, []);
  }
  let tuples = this._storage.get(index); //add our tuple
  for (let i = 0; i < tuples.length; i++) { //check if it k already exists
    if (tuples[i][0] === k) { //if so, overwrite it
      tuples[i][1] = v;
      overwrite = true;
    }
  }
  if (!overwrite) {
    tuples.push([k, v]);
  }

  this._storage.set(index, tuples);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let tuples = this._storage.get(index);
  for (let i = 0; i < tuples.length; i++) {
    if (tuples[i][0] === k) {
      return tuples[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let tuples = this._storage.get(index);
  for (let i = 0; i < tuples.length; i++) {
    if (tuples[i][0] === k) {
      tuples[i][1] = undefined;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
