class Node {
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}

class Tree {
  constructor(arr) {
    arr = arr.sort(function(a,b) {return a - b});
    this.root = buildTree(arr, 0, arr.length-1);
  }
  
  insert(value) {
    let pointer = this.root;
    
    while(pointer.leftChild || pointer.rightChild) {
      if(value > pointer.value) {
        pointer = pointer.rightChild;
      } else {
        pointer = pointer.leftChild;
      }
    }
    
    if(value > pointer.value) {
      pointer.rightChild = new Node(value);
    } else {
      pointer.leftChild = new Node(value);
    }
  }
}

const buildTree = (arr, start, end) => {
  if(start > end) return null;

  let mid = Math.floor((start + end)/2);
  let root = new Node(arr[mid]); console.log(root);
  root.leftChild = buildTree(arr, start, mid - 1);
  root.rightChild = buildTree(arr, mid + 1, end)
  
  return root; 
}

const arr = [1,2,3,4,5,6,7];
//      4
//    2   6 
//  1  3 5  7

let tree = new Tree(arr);
tree.insert(8);
console.log(tree.root);