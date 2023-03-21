interface INode {
  next: null | INode;
  data: any;
}
export class Node implements INode {
  next: null | INode;
  data: any;
  constructor(data: any, next = null) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  head: null | INode;
  size: number;
  constructor() {
    this.head = null;
    this.size = 0;
  }
  prepend(node: Node) {
    this.size++;
    if (this.head) {
      node.next = this.head;
      this.head = node;
    } else {
      this.head = node;
    }
  }
  add(node: Node) {
    if (this.head === null) {
      return this.prepend(node);
    }
    this.size++;
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
  }
  addWithIndex(node: INode, index: number) {
    if (index === this.size + 1) {
      return this.add(node);
    } else if (index === 0) {
      return this.prepend(node);
    }
    this.size++;
    let current: INode | null = this.head,
      counter: number = 0,
      previous: INode | null;

    while (counter < index) {
      previous = current;
      current = current!!.next;
      counter++;
    }
    previous!!.next = node;
    node.next = current;
  }
  search(data: any) {
    let current: INode | null = this.head;
    while (current) {
      if (current.data === data) {
        return console.log("Found");
      }
      current = current.next;
    }
    return console.log("Not found");
  }
  remove(data: any) {
    let current: INode | null = this.head,
      previous: INode | null;
    while (current) {
      if (current.data === data) {
        if (current === this.head) {
          this.head = current.next;
          this.size--;
          return console.log("Removed");
        } else {
          previous!!.next = current.next;
          this.size--;
          return console.log("Removed");
        }
      }
      previous = current;
      current = current.next;
    }
  }
  printList() {
    if (this.head) {
      let current: INode | null = this.head;
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
const linkedList = new LinkedList();
linkedList.prepend(new Node(1));
linkedList.prepend(new Node(2));
linkedList.add(new Node(3));
linkedList.addWithIndex(new Node(4), 2);
linkedList.search(7);
linkedList.remove(3);
linkedList.printList();
