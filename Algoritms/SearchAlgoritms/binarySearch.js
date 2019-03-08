let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

function binarySearch(arr,sVal) {
     let i = 0,
         j = arr.length-1,
         middle = 0;

     while (i<=j) {
          middle = Math.floor((j+i)/2);

          if (sVal<arr[middle]) {
               i = j-(j-i);
               j = middle-1;
               continue;
          } else if (sVal>arr[middle]) {
               i = middle+1;
               continue;
          }

          return middle;
     }

     return null;
}

console.log(binarySearch(arr,110));