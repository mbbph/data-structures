var LinkedList = function() {
  var list = {};
  list.head = null; //refers to the head node
  list.tail = null; //refers to the tail node

  list.addToTail = function(value) {
    let currentTail = list.tail;//currentTail = null
    let newNode = Node(value); //node(4)
    if (currentTail === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      currentTail.next = newNode; // null.next = node(4)
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    let temp = list.head; //get the current head node
    list.head = temp.next; //set head to next node
    return temp.value; //return prev head

  };

  list.contains = function(target) {
    //check all nodes before tail node
    let pointer = list.head;
    while (pointer.next !== null) {
      if (pointer.value === target) {
        return true;
      }
      pointer = pointer.next;
    //check tail node separately
    } if (pointer.value === target) {
      return true;
    } else {
      return false;
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
