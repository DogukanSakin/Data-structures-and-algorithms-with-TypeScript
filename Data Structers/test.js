class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.tail = this.head = null;
  }
  add(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }
  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    if (this.tail === null) {
      this.tail = node;
    }
  }
  linkedListContainsValue(value) {
    let currentHead = this.head;
    while (currentHead !== null && currentHead.data != value) {
      currentHead = currentHead.next;
    }
    if (currentHead !== null) {
      return true;
    } else {
      return false;
    }
  }
}
const LL = new LinkedList();
LL.add(10);
LL.add(20);
LL.add(30);
console.log(LL);
console.log(LL.linkedListContainsValue(30));
