
// Instantiate a new graph
var Graph = function() { //TODO: confirm with TM
  this.nodes = {}; //contains all nodes in the graph
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  let newNode = {}; //create a new node
  newNode.value = node; //set newnode target value to node
  newNode.neighbors = {};
  this.nodes[node] = newNode; //add new node to graph

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this.nodes) {
    if (parseInt(key, 10) === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  for (var key in this.nodes) {
    let currNode = this.nodes[key];
    let currneighbors = currNode.neighbors;
    for (var key in currneighbors) {
      if (key === node.toString()) {
        delete currneighbors[key];
      }
    }
  }
  delete this.nodes[node];

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  var nodeOne;

  for (var key in this.nodes) {
    if (key === fromNode.toString()) {
      nodeOne = this.nodes[key];
    }
  }

  for (var key in nodeOne.neighbors) {
    if (key === toNode.toString()) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var nodeOne = 0;
  var nodeTwo = 0; //second node object
  for (var key in this.nodes) {
    if (key === fromNode.toString()) {
      nodeOne = this.nodes[key];
    }
    if (key === toNode.toString()) {
      nodeTwo = this.nodes[key];
    }
  }

  nodeOne.neighbors[toNode] = nodeTwo;
  nodeTwo.neighbors[fromNode] = nodeOne;

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var nodeOne = 0;
  var nodeTwo = 0; //second node object
  for (var key in this.nodes) {
    if (key === fromNode.toString()) {
      nodeOne = this.nodes[key];
    }
    if (key === toNode.toString()) {
      nodeTwo = this.nodes[key];
    }
  }
  delete nodeOne.neighbors[toNode];
  delete nodeTwo.neighbors[fromNode];

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
