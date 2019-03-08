let s = "abcabeabcabcabd";

function substringSearch(s,sub) {
     let pi = prefixFunc(sub);
     let i = 0, j = 0;

     while (i<s.length) {
          while (s[i]===sub[j]) {
               i++;
               j++;
               if (j===sub.length) return [i-j,i-j+(j-1)];
          }
          j = pi[j-1];
          if (typeof j === "undefined") {
               i++;
               j=0;
               continue;
          }
     }
     

     return -1;
}

function prefixFunc(sub) {
     let pi = [];

     for (let i=0;i<sub.length;i++) {
          let prefix = "", suffix = "",maxIndex = 0;
          for (let k=0;k<i;k++) {
               suffix=sub[i-k]+suffix;
               prefix+=sub[k];
               if (prefix===suffix) {
                    maxIndex = k+1;
               }
          }
          pi.push(maxIndex);
     }

     return pi;
}
console.log(substringSearch(s,"abcabd"));