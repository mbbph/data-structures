var BinarySearchTree = function(value) {
  var tree = {};

  tree.left = undefined;
  tree.right = undefined;
  tree.value = value;

  tree.insert = function(value) {
    if (value < tree.value) {
      if (tree.left === undefined) {
        let newTree = BinarySearchTree(value);
        tree.left = newTree;
        return;
      } else {
        tree.left.insert(value);
      }
    } else {
      if (tree.right === undefined) {
        let newTree = BinarySearchTree(value);
        tree.right = newTree;
        return;
      } else {
        tree.right.insert(value);
      }
    }
    console.log(tree);
  };

  tree.contains = function(value) {
    if (value === tree.value) {
      return true;
    } else if (tree.left !== undefined && value < tree.value) {
      return tree.left.contains(value);
    } else if (tree.right !== undefined && value > tree.value) {
      return tree.right.contains(value);
    } else {
      return false;
    }
  };

  tree.depthFirstLog = function(cb) {
    cb(tree.value);
    if (tree.left !== undefined) {
      tree.left.depthFirstLog(cb);
    }
    if (tree.right !== undefined) {
      tree.right.depthFirstLog(cb);
    }
  };
  return tree;

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
