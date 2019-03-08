let arr = [1,13,5,2,11,6,7,4,14,10,9,8,3,12];

function findMin(arr,start) {
     let min = +Infinity,
         minIndex = 0;
     for (let i=start;i<arr.length-1;i++) {
          if (arr[i] < min) {
               min = arr[i];
               minIndex = i;
          }
     }
     return minIndex;
}

function selectionSort(arrT) {
     let arr = arrT.slice(),
         index = 0;

     while (index<arr.length-1) {
          let min = findMin(arr,index);
          if (min!=index) {
               [arr[index],arr[min]] = [arr[min],arr[index]];
          }
          index++;
     }

     return arr;
}


console.log(selectionSort(arr));
console.log(arr);