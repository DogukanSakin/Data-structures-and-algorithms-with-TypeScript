class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
}
  
class BST {
    constructor(value) {
      this.root = new Node(value);
      this.count = 1;
    }
  
size() {
    return this.count;
}
insert(value) {
    this.count++;
    let newNode = new Node(value);
    const searchTree = (node) => {
        if (value < node.value) {
            if (!node.left) {
             node.left = newNode;
            } 
            else {
                searchTree(node.left);
            }
        }
        else if (value > node.value) {
            if (!node.right) {
                node.right = newNode;
            }
            else{
                searchTree(node.right);
            }
        }
    }
        searchTree(this.root);
}
min() {
    let currentNode = this.root;
    while (currentNode.left) {
        currentNode = currentNode.left;
    }
    return currentNode.value;
} 
max() {
    let currentNode = this.root;
    while (currentNode.right) {
        currentNode = currentNode.right;
    }
    return currentNode.value;
}
contains(value) {
    let currentNode = this.root;
    while (currentNode) {
        if (value === currentNode.value) {
          return true;
        }
        if (value < currentNode.value) {
          currentNode = currentNode.left;
        } else {
          currentNode = currentNode.right;
        }
    }
    return false;
}
inOrder() {
    let result = []
    const traverse = (node) => {
        if (node.left) traverse(node.left);
        result.push(node.value);
        if (node.right) traverse(node.right);
    }
    traverse(this.root)
    return result
}
preOrder() {
    let result = [];
    const traverse = (node) => {
        result.push(node.value);
        if (node.left) traverse(node.left);      
        if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return result;    
}
postOrder() {
    let result = []
    const traverse = (node) => {
        if (node.left) traverse(node.left);      
        if (node.right) traverse(node.right);
        result.push(node.value);
    }
    traverse(this.root);
    return result;
    }
  
}
const bst = new BST(15);
for (let i = 1; i <= 10; i++) {
    bst.insert(i*(Math.floor(Math.random() * 10) + 1));
    
}
console.log("preorder:"+bst.preOrder());
console.log("postorder:"+bst.postOrder());
console.log("inorder:"+bst.inOrder());
console.log("size:"+bst.size());
console.log("min:"+bst.min());
console.log("max:"+bst.max());

  
