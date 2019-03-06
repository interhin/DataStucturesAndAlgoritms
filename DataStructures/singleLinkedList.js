class ListNode {
     constructor(value) {
          this.value = value;
          this.next = null;
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
          } else {
               let prevNode = this.tail;
               this.tail = newNode;
               prevNode.next = this.tail;
          }

          this.n++;
     }

     remove(value) {
          let current = this.head,
              previous = null;

          while (current !== null) {
               
               if (current.value === value) {

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

list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.remove(5);
console.log(list.contains(5));
list.remove(2);
list.remove(3);
console.log(list.isEmpty());