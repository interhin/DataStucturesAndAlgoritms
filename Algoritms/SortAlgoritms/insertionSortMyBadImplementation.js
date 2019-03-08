let arr = [1,13,5,2,11,6,7,4,14,10,9,8,3,12];

function slideToRight(arr,start) {
     arr.push(null);
     for (let i=arr.length-1;i>=start;i--) {
          arr[i] = arr[i-1];
     }
}

function insertionSort(arrT) {
     let arr = arrT.slice(),
         sortedArr = [arr[0]];

     for (let i=1;i<arr.length;i++){
          let isLess = false, start = 0;
          for (let j=0;j<sortedArr.length;j++) {
               if (arr[i]<sortedArr[j]) {
                    isLess = true;
                    start = j;
                    break;
               }
          }
          if (isLess) {
               slideToRight(sortedArr,start);
               sortedArr[start] = arr[i];
          } else {
               sortedArr.push(arr[i]);
          }
     }

     return sortedArr;
}

console.log(insertionSort(arr));
console.log(arr);