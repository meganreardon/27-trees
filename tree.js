'use strict';

const Queue = require('./queue.js');

module.exports = Tree;

function Tree(val) {
  this.val = val;
  this.children = [];
}

Tree.prototype.treeQueuer = function() {
  let q = new Queue();
  q.enqueue(this);
  while(q.sll.head) {
    let cur = q.dequeue();
    console.log(cur.val);
    cur.childern.forEach(function(child) {
      q.enqueue(child);
    });
  }
};
