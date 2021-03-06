'use strict';

const Queue = require('./queue.js');

module.exports = Tree;

function Tree(val) {
  this.val = val;
  this.children = [];
}

var treeArray = [];

Tree.prototype.treeQueuer = function() {
  let q = new Queue();
  q.enqueue(this);
  while(q.head) {
    let cur = q.dequeue();
    treeArray.push(cur.val);
    cur.children.forEach(function(child) {
      q.enqueue(child);
    });
  }
  return treeArray;
};
