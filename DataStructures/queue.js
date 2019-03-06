class QueueNode {
     constructor(value) {
          this.value = value;
          this.next = null;
     }
}

class Queue {
     constructor() {
          this.first = null;
          this.last = null;
          this.n = 0;
     }

     isEmpty() {
          return this.n === 0;
     }

     size() {
          return this.n;
     }

     enqueue(value) {
          let old = this.last;
          this.last = new QueueNode(value);

          if (this.isEmpty()) this.first = this.last;
          else old.next = this.last;

          this.n++;
     }

     dequeue() {
          let old = this.first;
          this.first = this.first.next;
          this.n--;
          return old.value;
     }
}

let queue = new Queue();

queue.enqueue(2);
queue.enqueue(2213);
queue.enqueue(1313);
queue.dequeue();
console.log(queue.first);