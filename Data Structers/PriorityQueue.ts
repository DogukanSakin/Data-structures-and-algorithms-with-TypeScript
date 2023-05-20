interface IItem{
    element:any;
    priority:number;
}
class QElement implements IItem{
    element: any;
    priority: number;
    constructor(element:any,priority:number){
        this.element = element;
        this.priority = priority;
    }
}
export class PriorityQueue{ 
    itemsContainer:QElement[];
    constructor(){
        this.itemsContainer = [];
    }
    enqueue(element:QElement){
        let isContain:boolean = false;
        for(let i:number = 0 ; i < this.itemsContainer.length;i++){
            if(this.itemsContainer[i].priority > element.priority){
                this.itemsContainer.splice(i,0,element);
                isContain=true;
                break;
            }
        }
        if(!isContain){
            this.itemsContainer.push(element);
        }
    }
    isEmpty(){
        return this.itemsContainer.length>0 ? false : true;
    }
    dequeue(){
        if(this.isEmpty()===false){
            return this.itemsContainer.shift();
        }
    }
    front(){
        if(this.isEmpty()===false){
            return this.itemsContainer[0];
        }
    }
    rear(){
        if(this.isEmpty()===false){
            return this.itemsContainer[this.itemsContainer.length-1];
        }
    }
}
const pq = new PriorityQueue();
pq.enqueue(new QElement("A",2));
pq.enqueue(new QElement("B",1));
pq.enqueue(new QElement("C",4));
pq.enqueue(new QElement("D",3));
pq.enqueue(new QElement("E",3));
pq.enqueue(new QElement("F",5));
console.log(pq);
