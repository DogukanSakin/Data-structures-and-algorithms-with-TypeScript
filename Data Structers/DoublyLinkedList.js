class Node{
    constructor(data) {
        this.data=data;
        this.next=null;
        this.previous=null;
    }
}
class DoublyLinkedList{
    constructor() {
        this.head=null;
        this.size=0;
        this.tail=null;
    }
    prepend(data){
        this.head=new Node(data);
        this.tail=new Node(data);
        this.size++;
    }
    append(data){
        if(this.head==null) return this.prepend(data);
        const node=new Node(data);
        let temp=this.tail;
        this.tail=node;
        node.previous=temp;
        temp.next=node;
        this.size++;
    }
}

const doublyLinkedList=new DoublyLinkedList();
doublyLinkedList.prepend(10);
doublyLinkedList.append(20);
console.log(doublyLinkedList);