class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  isEmpty() {
    return !this.head;
  }
  add(data) {
    const node = new Node(data);
    if (this.head === null) {
      return (this.head = node);
    }
    let currentHead = this.head;
    while (currentHead.next != null) {
      currentHead = currentHead.next;
    }
    currentHead.next = this.tail = node;
  }
  remove() {
    let current = this.head;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    return current;
  }
  printList() {
    let currentHead = this.head;
    while (currentHead.next != null) {
      console.log(currentHead.data);
      currentHead = currentHead.next;
    }
    console.log(currentHead.data);
  }
}
const q = new Queue();
q.add(10);
q.add(20);
q.add(30);
q.remove();
console.log(q.isEmpty());
q.printList();
