var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; //array containing a number of subtrees

  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

//takes any value, sets that as the target of a node, and adds that node as a child of the tree
treeMethods.addChild = function(value) {
  let newTree = Tree(value);
  this.children.push(newTree);
};

//takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].treeMethods.contains() === true) {
      return true;
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
