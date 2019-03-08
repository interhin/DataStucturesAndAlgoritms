let arr = [1,13,5,2,11,6,7,4,14,10,9,8,3,12];

function bubbleSort(arrT) {
     let arr = arrT.slice();

     for (let i=0;i<arr.length;i++) {
          for (let j=0;j<i;j++) {
               if (arr[i]<arr[j]) {
                    [arr[i],arr[j]] = [arr[j],arr[i]];
               }
          }
     }

     return arr;
}


console.log(bubbleSort(arr));
console.log(arr);