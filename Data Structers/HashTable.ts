interface IHashFactory {
  key: string;
  value: any;
}
export class HashFactory implements IHashFactory {
  key: string;
  value: any;
  constructor(key: string, value: any) {
    this.key = key;
    this.value = value;
  }
}
export class HashTable {
  data: HashFactory[];
  size: number;
  constructor() {
    this.data = [];
    this.size = 0;
  }
  set(hashedData: HashFactory) {
    const hash = this.hash(hashedData.key);
    this.size++;
    return (this.data[hash] = hashedData);
  }

  get(key: string) {
    const index = this.hash(key);
    return this.data[index];
  }
  private hash(key: string) {
    let hashCode = 0;
    for (let i = 0; i < key.length; i++) {
      hashCode += key.charCodeAt(i);
    }
  
    
    return hashCode;
  }
}
const hashTable = new HashTable();
hashTable.set(new HashFactory("1", "First item"));
hashTable.set(new HashFactory("2", "Second item"));
console.log(hashTable.get("1"));
