class Node{
    constructor(data,next=null) {
        this.data=data;
        this.next=next;
    }
}
class Queue{
    constructor() {
        this.head=null;
        this.tail=null;
    }
    isEmpty(){
        return !this.head;
    }
    add(data){
        const node=new Node(data);
        if(this.tail) this.tail.next=node;
        this.tail=node;
        if(!this.head) this.head=node;
    }
    remove(){
        let current=this.head;
        this.head=this.head.next;
        if(!this.head) this.tail=null;
        return current;
    }
        
    
    
}
const q = new Queue();
q.add(10);
q.add(20);
q.add(30);
q.remove();
console.log(q.isEmpty());
console.log(q);