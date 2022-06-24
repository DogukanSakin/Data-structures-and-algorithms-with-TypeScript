class HashTable{
    constructor() {
        this.table=[],
        this.size=0
    }
    _hash(key){
        let hash=0;
        for(let i=0;i<key.length;i++){
            hash+=key.charCodeAt(i);
        }
        return hash % this.table.length;
    }
    set(key,data){
        const index=this._hash(key);
        this.table[index]=data;
        this.size++;
        console.log(this.size);
    }
    get(key) {
        const index = this._hash(key);
        return this.table[index];
    }
    remove(key){
        const index = this._hash(key);
        this.table[index]=[];
        this.size--;
    }

}
const hashTable=new HashTable();
hashTable.set(1,10);
console.log(hashTable.get(0));
hashTable.set(2,20);
hashTable.remove(1);
hashTable.remove(0);
console.log(hashTable.get(1));
console.log(hashTable.get(0));