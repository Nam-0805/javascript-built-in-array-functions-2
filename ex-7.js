function isPalindrome(word) {
    const strReverse = word.split('').reverse().join(''); //reverse ใช้กับ Array เท่านั้น ใช้กับ Array ไม่ได้
    if(word.trim() === strReverse) { // trim เอาช้องว่างหน้าหลังออก
      return true;
    }
    else {
      return false;
    }
}
//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false