class ListNode {
     constructor(value) {
          this.value = value;
          this.next = null;
          this.prev = null;
          this.index = -1;
     }
}

class LinkedList {
     constructor() {
          this.head = null;
          this.tail = null;
          this.n = 0;
     }

     isEmpty() {
          return this.n === 0;
     }

     size() {
          return this.n;
     }

     clear() {
          this.head = null;
          this.tail = null;
          this.n = 0;
     }

     add(value) {
          let newNode = new ListNode(value);

          if (this.isEmpty()) {
               this.head = this.tail = newNode;
               this.head.index = this.tail.index = ++this.n;
          } else {
               let prevNode = this.tail;
               this.tail = newNode;
               this.tail.prev = prevNode;
               this.tail.index = ++this.n;
               prevNode.next = this.tail;
          }
     }

     remove(value,index) {
          let current = this.head,
              previous = null,
              ifField = "value",ifCompareValue = value;

          if (index) {
               ifField = "index";
               ifCompareValue = index;
          }

          while (current !== null) {
               
               if (current[ifField] === ifCompareValue) {
                    this.decrementAfter(current.index);

                    if (previous !== null) { // Если элемент для удаления не в начале
                         previous.next = current.next;
                         if (current.next === null) // Если элемент для удаления в конце
                              this.tail = previous;
                    } else { // Если элемент для удаления в начале
                         this.head = current.next;
                         if (this.head === null) // Если в списке больше нет элементов
                              this.tail = null;
                    }

                    this.n--;
                    return true;

               }

               previous = current;
               current = current.next;
          }

          return false;
     }

     decrementAfter(index) {
          let current = this.byIndex(index);

          while (current !== null) {
               current.index--;
               current = current.next;
          }
     }

     byIndex(index) {
          let current = this.head;

          while (current !== null) {
               if (current.index === index) {
                    return current;
               }

               current = current.next;
          }

          return null;
     }

     contains(value) {
          let current = this.head;

          while (current !== null) {
               if (current.value === value)
                    return true;

               current = current.next;
          }

          return false;
     }
}

let list = new LinkedList();

list.add(9);
list.add(13);
list.add(42);
list.add(1);
list.add(4);
console.log(list.byIndex(2));
list.remove(null,2);
console.log(list.byIndex(2));