class Node{
    constructor(data,next=null) {
        this.data=data;
        this.next=next;
    }
}
class LinkedList{
    constructor() {
        this.head=null;
        this.size=0;
    }
    prepend(data){
        this.head=new Node(data);
        this.size++;
    }
    append(data){
        if(this.head==null){
            this.prepend(data);
            return this;
        }
        const node = new Node(data);
        let current=this.head;
        while(current.next!=null){
            current=current.next;
        }
        current.next=node;
        this.size++;
    }
    printList(){
        if(this.head==null) return console.log("list is empty");      
        let current=this.head;
        while(current){
            console.log(current.data);
            current=current.next;
        }
    }
    appendWithIndex(data,index){
        if(index>0 &&  index.size>0) return this;
        if(index==0) return this.prepend(data);
        let current=this.head,previous,counter=0;
        const node=new Node(data);
        while(counter<index){
            previous=current;
            counter++;
            current=current.next;
        }
        node.next=current;
        previous.next=node;
        this.size++;
    }
    removeWithIndex(index){
        if(index>this.size || index<0) return console.log("index value is out of list length range!");
        let current=this.head,previous,counter=0;
        if(index==0) return this.head=current.next;
        while(counter<index){
            previous=current;
            current=current.next;
            counter++;
        }
        previous.next=current.next;
        this.size--;
    }

}
const linkedList=new LinkedList();
linkedList.append(10);
linkedList.prepend(20);
linkedList.append(30);
linkedList.appendWithIndex(15,1);
linkedList.removeWithIndex(2);
linkedList.printList();