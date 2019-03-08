let s = "abcabeabcabcabd";

function substringSearch(s,sub) {

     for (let i=0;i<s.length;i++) {
          let j = 0,isIncorrect = false;
          if (s[i]===sub[j]) {
               while (j+i+1 < s.length && j<sub.length-1) {
                    j++;
                    if (s[j+i]!==sub[j]) {
                         isIncorrect = true;
                         break;
                    }
               }
               if (isIncorrect) {
                    continue;
               } else {
                    return i;
               }
          }
     }

     return -1;
}

console.log(substringSearch(s,"abcabd"));