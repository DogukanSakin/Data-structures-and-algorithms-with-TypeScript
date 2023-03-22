import { Node } from "./LinkedList";
export class Queue {
  size: number;
  head: Node | null;
  constructor() {
    this.head = null;
    this.size = 0;
  }
  enqueue(node: Node) {
    this.size++;
    if (this.head === null) {
      this.head = node;
      return;
    }
    let current: Node | null = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current!!.next = node;
  }
  dequeue() {
    if (this.head) {
      this.head = this.head.next;
      this.size--;
    } else {
      return console.log("List is empty");
    }
  }
  printList() {
    if (this.head) {
      let current: Node | null = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
      console.log("Size:" + this.size);
    } else {
      return console.log("List is empty");
    }
  }
}
const q = new Queue();
q.enqueue(new Node(1));
q.enqueue(new Node(2));
q.enqueue(new Node(3));
q.enqueue(new Node(4));
q.dequeue();
q.dequeue();

q.printList();
