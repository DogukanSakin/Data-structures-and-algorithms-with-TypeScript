class PriorityQueue{
    constructor() {
        this.list=[];
    }
    enqueue(data){
        if(this.isEmpty()){
            return this.list.push(data);
        }
        else{
            for(let i=0;i<this.list.length;i++){
                if(data[1]<this.list[i][1]){
                    return this.list.splice(i,0,data);
                    
                }
            }
            return this.list.push(data);

        }

    }
    dequeue(){
        let val=this.list.shift();
        return val[0];
    }
    front(){
        return this.list[0];
    }
    size(){
        return this.list.length;
    }
    isEmpty(){
        return this.list.length==0;
    }
}
const pq=new PriorityQueue();
pq.enqueue(['Data1',2]);
pq.enqueue(['Data2',1]); 
pq.enqueue(['Data3',3]);
pq.dequeue();
console.log(pq);