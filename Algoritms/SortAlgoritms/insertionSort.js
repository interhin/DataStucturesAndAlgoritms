let arr = [1,13,5,2,11,6,7,4,14,10,9,8,3,12];

const insertionSort2 = arr => {
     for (let i = 1, l = arr.length; i < l; i++) {
         const current = arr[i];
         let j = i;
         while (j > 0 && arr[j - 1] > current) {
             arr[j] = arr[j - 1];
             j--;
         }
         arr[j] = current;
     }
     return arr;
 };

console.log(insertionSort2(arr));
console.log(arr);