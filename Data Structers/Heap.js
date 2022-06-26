class Heap{
    constructor() {
        this.list = [];
    }
    getParentWithIndex(index){
        return Math.floor((index-1)/2);
    }
    getLeftChildWithIndex(index){
        return index*2-1;
    }
    getRightChildWithIndex(index){
        return index*2+2;
    }
    swap(firstIndex,secondIndex){
        const tempIndex=this.list[firstIndex];
        this.list[firstIndex]=this.list[secondIndex];
        this.list[secondIndex]=tempIndex;
    }
    push(data){
        this.list[this.list.length]=data;
        this.heapifyUp();
    }
    heapifyUp(){
        let current=this.list.length-1;
        while(this.list[current]>this.list[this.getParentWithIndex(current)]){
            this.swap(current,this.getParentWithIndex(current));
            current=this.getParentWithIndex(current);
        }
    }
    poll(){
        const maxValue=this.list[0];
        this.list[0]=this.list[this.list.length-1];
        this.list.length--;
        this.heapifyDown();
        return maxValue;
    }
    heapifyDown(){
        let current=0;
        while(this.list[this.getLeftChildWithIndex(current)!=undefined]){
            let biggestChildIndex=this.getLeftChildWithIndex(current);
            if(this.list[this.getRightChildWithIndex(current)!=undefined] && this.list[this.getRightChildWithIndex(current)] > this.list[this.getLeftChildWithIndex(current)]){
                biggestChildIndex=this.list[this.getRightChildWithIndex(current)];
            }
            if(this.list[current]<this.list[biggestChildIndex]){
                this.swap(current,biggestChildIndex);
                current=biggestChildIndex;
            }
        }
    }
    
}

const heap=new Heap();

for(let i=1;i<=10;i++){
    heap.push(i*10);
}

console.log("items:"+heap.list.join(','));
console.log("max value in items:"+heap.poll());


