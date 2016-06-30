/**
 * Write a function that takes an integer and the head of a singly linked list,
 * and returns the VALUE kth to last node in the list.
 *
 * var a = new Node('A');
 * var b = new Node('B');
 * var c = new Node('C');
 * var d = new Node('D');
 * var e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2,a); -> returns the node with the value 'D' (the second to last node)
 */
function LinkedList(){
  this.head = null;
  this.tail = null;
  this.length = 0;
}
function Node(val) {
  this.value = val;
  this.next = null;
}
//this is just here to show how I would use/increase length 
LinkedList.prototype.push = function(value) {
	var newNode = new Node(value);

	if(this.head === null){
		this.head = newNode; 
		this.tail = newNode;
		this.length ++;
	}else 
	{
		this.tail.next = newNode;
		this.tail = newNode;
		this.length ++;
	}
};
LinkedList.prototype.kthToTheLast = function(k, head) {
	var currentNode = this.head;
	for (var i = this.length; i > k; i--){
		currentNode = currentNode.next;
	}
	return currentNode.value;

module.exports = {Node: Node, kthToLastNode: kthToLastNode};