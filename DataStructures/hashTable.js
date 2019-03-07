class ListNode {
     constructor(key,value) {
          this.key = key;
          this.value = value;
          this.next = null;
          this.prev = null;
     }
}

class HashTable {
     constructor(capacity) {
          this.listNodes = []; // Массив связных списков
          this.capacity = 4 || capacity; // Вместимость/Размер хэш таблицы

          for (let i=0;i<capacity;i++) { // Инициализируем массив связных списков
               this.listNodes.push(null);
          }
     }

     put(key,value) {
          let currentNode = this.getNodeForKey(key);
          if (currentNode) { // Если указанный ключ уже существует то просто перезаписываем значение
               let old = currentNode.value;
               currentNode.value = value;
               return old; // Возвращаем удаленное значение
          }

          currentNode = new ListNode(key,value);
          let index = this.getIndexForKey(key), // Генерируем индекс связного списка для нового ключа
              old = this.listNodes[index]; // Предыдущая запись (если она не null)

          if (old) { // Если по полученному индексу уже есть другие записи
               currentNode.next = old; // То говорим что эта запись будет следующей после нашей новой
               currentNode.next.prev = currentNode; // И предыдущая запись для такой записи будет наша новая
          }
          this.listNodes[index] = currentNode; // А новую созданную запись ставим как начало связного списка

          return null;
     }
     
     remove(key) {
          let currentNode = this.getNodeForKey(key);
          if (!currentNode) { // Если записи с таким ключем нету то возвращаем null
               return null;
          }

          if (currentNode.prev) { // Если удаляется не первая запись в связном списке. Т.е. предыдущая запись есть
               currentNode.prev.next = currentNode.next; 
          } else { // Иначе если мы удаляем первую запись в списке
               let index = this.getIndexForKey(key); // Узнаем индекс связного списка в котором находится ключ
               this.listNodes[index] = currentNode.next; // И "удаляем" первую запись, точнее говорим что теперь первая запись - следующая после текущей
          }

          if (currentNode.next) { // Если после текущей записи которую мы удаляем есть еще, то меняем его ссылку на предыдущий ключ
               currentNode.next.prev = currentNode.prev;
          }

          return currentNode.value;
     }

     get(key) {
          if (!key) return null;

          let node = this.getNodeForKey(key);
          return node ? node.value : null;
     }

     getNodeForKey(key) {
          let index = this.getIndexForKey(key), // Узнаем индекс связного списка для подобных ключей
              current = this.listNodes[index];

          while (current) { // Поиск по связному списку нужного ключа
               if (current.key === key) {
                    return current;
               }
               current = current.next;
          }

          return null;
     }

     // Получение индекса связного списка в массиве связных списков для ключа
     getIndexForKey(key) {
          return Math.abs(this.getHashCode(key) % this.listNodes.length);
     }

     // "Hash функция", Генерация индекса связного списка в массиве связных списков для ключа
     getHashCode(key) {
          // Индексы для связных списков задаются по длине ключа
          // Остаток от деления на случай если длина ключа будет больше вместимости хэш таблицы
          return Math.abs(key.length % this.listNodes.length);
     }
}

let ht = new HashTable(2);
ht.put("xhr",30);
ht.put("log",228);
ht.put("aga",9124);
ht.remove("xhr");
console.log(ht.get("log"));