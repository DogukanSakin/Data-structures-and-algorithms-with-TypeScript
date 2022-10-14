class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  prepend(data) {
    if (!this.head) {
      this.head = new Node(data);
    } else {
      let node = new Node(data);
      let currentRoot = this.head;
      this.head = node;
      node.next = currentRoot;
    }

    this.size++;
  }
  append(data) {
    if (this.head == null) {
      this.prepend(data);
      return this;
    }
    const node = new Node(data);
    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    current.next = node;
    this.size++;
  }
  appendWithIndex(data, index) {
    if (index > 0 && index.size > 0) return this;
    if (index == 0) return this.prepend(data);
    if (index === this.size + 1) return this.append(data);
    let current = this.head,
      previous,
      counter = 0;
    const node = new Node(data);
    while (counter < index) {
      previous = current;
      counter++;
      current = current.next;
    }
    node.next = current;
    previous.next = node;
    this.size++;
  }
  removeWithIndex(index) {
    if (index > this.size || index < 0)
      return console.log("index value is out of list length range!");
    let current = this.head,
      previous,
      counter = 0;
    if (index == 0) return (this.head = current.next);
    while (counter < index) {
      previous = current;
      current = current.next;
      counter++;
    }
    previous.next = current.next;
    this.size--;
  }
  getWithIndex(index) {
    if (index > this.size || index < 0)
      return console.log("index value is out of list length range!");
    let current = this.head;
    let counter = 0;
    while (current) {
      if (counter == index) {
        console.log("Data:" + current.data);
      }
      counter++;
      current = current.next;
    }
  }
  searchInList(data) {
    let currentHead = this.head;
    while (currentHead !== null && currentHead.data !== data) {
      currentHead = currentHead.next;
    }
    if (currentHead === null)
      return console.log("This data is not in the list ");
    else return console.log("This data is in the list");
  }
  printList() {
    if (this.head == null) return console.log("list is empty");
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}
const linkedList = new LinkedList();
linkedList.prepend(10);
linkedList.append(20);
linkedList.append(30);
linkedList.appendWithIndex(15, 1);
linkedList.removeWithIndex(2);
linkedList.getWithIndex(0);
linkedList.prepend(20);
linkedList.searchInList(10);
linkedList.searchInList(90);
linkedList.printList();
