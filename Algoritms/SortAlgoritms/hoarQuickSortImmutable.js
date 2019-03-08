let arr = [1,13,5,2,11,6,7,4,14,10,9,8,3,12];

function partition(arr,i,j) {
     const pivotPosition = Math.floor(Math.random() * arr.length);
     const pivot = arr[pivotPosition]; // Рандомное опорное число
     while (i<=j) {
          while (arr[i]<pivot) { // Пока не находим число слева которое больше чем опорное идем слева на право 
               i++;
          }
          while (arr[j]>pivot) { // Пока не находим число справа которое меньше чем опорное идем справа на лево
               j--;
          }

          if (i<=j) { // После того как нашли слева и справа нужные числа - меняем их местами
               [arr[i],arr[j]] = [arr[j],arr[i]];
               // И меняем счетчики (также i увеличится если i==j)
               i++;
               j--;
          }
     }

     return i;
}

function hoar(arrF) {
     let arr = arrF.slice();
     if (arr.length<2) return arr; // Если в массиве остался 1 элемент то возвращаем массив
     const index = partition(arr,0,arr.length-1); // Меняем местами элементы относительно опорного элемента
     let left = arr.slice(0,index),
         right = arr.slice(index,arr.length);
     return hoar(left).concat(hoar(right)); // Возвращаем левую и правую часть рекурсивно
}

console.log(hoar(arr));
console.log(arr);