class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class Stack {
  constructor() {
    this.top = null;
  }
  isEmpty() {
    return !this.top;
  }
  push(data) {
    const node = new Node(data);
    node.next = this.top;
    this.top = node;
  }
  pop() {
    let current = this.top;
    this.top = this.top.next;
    return current;
  }
  printList() {
    let currentTop = this.top;
    while (currentTop.next != null) {
      console.log(currentTop.data);
      currentTop = currentTop.next;
    }
    console.log(currentTop.data);
  }
}
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.pop();
stack.printList();
