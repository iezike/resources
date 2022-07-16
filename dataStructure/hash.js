// function hash(key, arrayLen) {
//   let total = 0;
//   for (let char of key) {
//     let value = char.charCodeAt(0) - 96;
//     total = (total + value) % arrayLen;
//   }
//   return total;
// }
class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  
  hash(key, arrayLen) {
    let total = 0;
    const prime = 31;
    for (let i = 0; i < Math.max(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * prime + value) % arrayLen;
    }
    return total;
  }
}


console.log(hash("pink", 15));
console.log(hash("blue", 15));
