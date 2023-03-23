import { Node } from "./LinkedList";
export class Stack {
  tail: Node | null;
  constructor() {
    this.tail = null;
  }
  push(node: Node) {
    if (this.tail === null) {
      return (this.tail = node);
    }
    let currentTail = this.tail;
    this.tail = node;
    node.next = currentTail;
  }
  pop() {
    if (this.tail) return (this.tail = this.tail.next);
  }
  printList() {
    if (this.tail) {
      let current: Node | null = this.tail;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    } else {
      return console.log("List is empty");
    }
  }
}
const s = new Stack();
s.push(new Node(10));
s.push(new Node(20));
s.push(new Node(30));
s.pop();
s.printList();
