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

function hoarF(arr,i=0,j=arr.length-1) {
     if (i<j) {
          const index = partition(arr,i,j);
          hoarF(arr,i,index-1);
          hoarF(arr,index,j);
     }
     
     return arr;
}

function hoar(arr) {
     return hoarF(arr.slice());
}

console.log(hoar(arr));
console.log(arr);