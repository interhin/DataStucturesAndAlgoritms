let arr = [1,13,5,2,11,6,7,4,14,10,9,8,3,12];

function mergeSort(arr,i=0,j=arr.length-1) {
     if (i>=j) {
          return [arr[i]];
     }

     let middle = Math.floor((j+i)/2),
         tmpArr = [],
         i1 = 0, i2 = 0,
         left = mergeSort(arr,j-(j-i),middle),
         right = mergeSort(arr,middle+1,j);

     while (i1<left.length && i2<right.length) {
          if (left[i1]>right[i2]) {
               tmpArr.push(right[i2]);
               i2++;
          } else {
               tmpArr.push(left[i1]);
               i1++;
          }
     }

     if (i1>=left.length) {
          return tmpArr.concat(right.slice(i2,right.length));
     } else {
          return tmpArr.concat(left.slice(i1,left.length));
     }
}


console.log(mergeSort(arr));
console.log(arr);