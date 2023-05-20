export class Heap{
    heapContainer:number[];
    constructor(){
        this.heapContainer = [];
    }
    getLeftChildIndex(index:number){
        return (2 * index) + 1;
    }
    getRightChildIndex(index:number){
        return (2 * index) + 2;
    }
    getParentIndex(index:number){
        return Math.floor((index - 1) / 2);
    }
    hasParent(index:number){
        return this.getParentIndex(index) < this.heapContainer.length;
    }
    hasLeftChild(index:number){
        return this.getLeftChildIndex(index)< this.heapContainer.length;
    }
    hasRightChild(index:number){
        return this.getRightChildIndex(index)<this.heapContainer.length;
    }
    parent(index:number){
        return this.heapContainer[this.getParentIndex(index)];
    }
    leftChild(index:number){
        return this.heapContainer[this.getLeftChildIndex(index)];
    }
    rightChild(index:number){
        return this.heapContainer[this.getRightChildIndex(index)];
    }
    swap(i:number,j:number){
        return [this.heapContainer[i],this.heapContainer[j]] = [this.heapContainer[j],this.heapContainer[i]]
    }
    peek(){
        return this.heapContainer.length > 0 ? this.heapContainer[0] : null;
    }
    poll(){
        if(this.heapContainer.length>0){
            this.heapContainer[0] = this.heapContainer.pop() as number;
            this.heapifyDown(this.heapContainer.length-1);
        }
       
    }
    heapifyDown(index:number) {
        let largest = index; 
        if (this.hasLeftChild(index) && this.leftChild(index) > this.heapContainer[largest]) {
            largest = this.getLeftChildIndex(index);
        }
        if (this.hasRightChild(index) && this.rightChild(index) > this.heapContainer[largest]) {
            largest = this.getRightChildIndex(index);
        }
        if (largest !== index) {
            this.swap(index,largest)
            this.heapifyDown(largest);
        }
    }
    heapifyUp(index:number){
       throw new Error("Please implement heapify up");
    }
    add(item:number){
        this.heapContainer.push(item);
        return this.heapifyUp(this.heapContainer.length-1);
    }
    isLeaf(i:number){
        return (
            this.getLeftChildIndex(i) >= this.heapContainer.length &&
            this.getRightChildIndex(i) >= this.heapContainer.length
        );
    }
    print() {
        let i = 0;
        while (!this.isLeaf(i)) {
            console.log("PARENT:", this.heapContainer[i]);
            console.log("LEFT CHILD:", this.heapContainer[this.getLeftChildIndex(i)]);
            console.log("RIGHT CHILD:", this.heapContainer[this.getRightChildIndex(i)]);
            i++;
        }      
    }
    

}
class MaxHeap extends Heap{
 heapifyUp(index: number): void {
    if(this.hasParent(index)&&this.parent(index) <this.heapContainer[index]){
        this.swap(this.getParentIndex(index),index);
        this.heapifyUp(this.getParentIndex(index));
    }
 }
}
class MinHeap extends Heap{
    heapifyUp(index: number): void {
        if(this.hasParent(index)&&this.parent(index)> this.heapContainer[index]){
            this.swap(this.getParentIndex(index),index);
            this.heapifyUp(this.getParentIndex(index));
        }
     }
}

console.log("Max Heap:");
const maxHeap = new MaxHeap();
maxHeap.add(1);
maxHeap.add(2);
maxHeap.add(6);
maxHeap.add(4);
maxHeap.add(5);
maxHeap.add(3);
maxHeap.add(7);
maxHeap.add(8);
maxHeap.add(10);
maxHeap.add(9);
maxHeap.print();
console.log("______________________");
console.log("Min Heap:");
const minHeap = new MinHeap();
minHeap.add(1);
minHeap.add(2);
minHeap.add(3);
minHeap.add(4);
minHeap.add(5);
minHeap.add(6);
minHeap.add(7);
minHeap.add(8);
minHeap.add(9);
minHeap.add(10);
minHeap.print();
