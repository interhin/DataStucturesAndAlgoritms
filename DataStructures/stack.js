class StackNode {
     constructor(value) {
          this.value = value;
          this.prev = null;
     }
}

class Stack {
     constructor() {
          this.root = null;
          this.n = 0;
     }

     isEmpty() {
          return this.n === 0;
     }

     size() {
          return this.n;
     }

     push(value) {
          let old = this.root;
          this.root = new StackNode(value);
          this.root.prev = old;
          this.n++;
     }

     pop() {
          let old = this.root;
          this.root = this.root.prev;
          this.n--;
          return old.value;
     }
}

let stack = new Stack();

stack.push(1);
stack.push(1313);
stack.push(2314);
stack.pop();
stack.pop();
console.log(stack.root);