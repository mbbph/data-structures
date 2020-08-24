
//TODO: Finish table doubling and halving
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._count = 0;
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
    this._count++; //increment number of items
  }
  this._storage.set(index, tuples);
  if (this._count / this._limit > 0.75) {
    this._limit = this._limit * 2;
  }
  console.log(this._count);
  console.log(this._limit);


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
      this._count--;
    }
  }
  if (this._count / this._limit < 0.25) {
    this._limit = Math.ceil(this._limit / 2);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
