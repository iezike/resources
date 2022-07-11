// class Linkedlist {
//   constructor() {
//     (this.head = null), (this.tail = null);
//   }
//   append(value) {
//     const newNode = { value: value, next: null };
//     if (this.tail) {
//       this.tail.next = newNode;
//     }
//     this.tail = newNode;
//     if (!this.head) {
//       this.head = newNode;
//     }
//   }

//   delete(value) {
//     if(!this.head) {
//       return;
//     }
//     while (this.head && this.head.value === value) {
//       this.head = this.head.next;
//     }
//     let curNode = this.head;
//     while(curNode.next) {
//       if(curNode.next.value === value) {
//         curNode.next = curNode.next.next;
//       } else {
//         curNode = curNode.next;
//       }
//     }
//     if (this.tail.value === value) {
//       this.tail = curNode;
//     }
//   }

//   preppend(value) {
//     const newNode = { value: value, next: this.head };
//     this.head = newNode;
//     if(!this.tail) {
//       this.tail = newNode;
//     }
//   }

//   toArray() {
//     const element = [];
//     let curNode = this.head;
//     while (curNode) {
//       element.push(curNode);
//       curNode = curNode.next;
//     }
//     return element;
//   }
// }

// const Linkedlist1 = new Linkedlist();
// Linkedlist1.append("Ikenna");
// Linkedlist1.append("John");
// Linkedlist1.append("Cynthia");
// Linkedlist1.append("Ikenna");
// Linkedlist1.append("David");
// Linkedlist1.append("Ikenna");
// console.log(Linkedlist1.toArray());
// Linkedlist1.delete("Ikenna");
// console.log(Linkedlist1.toArray());

// We have to implement append, prepend, delete, and toArray
class Linkedlist {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = { value: value, next: null };
    if (this.tail) {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }

  delete(value) {
    if (!this.head) {
      return;
    }
    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }
    let curNode = this.head;
    while (curNode.next) {
      if (curNode.next.value === value) {
        curNode.next = curNode.next.next;
      } else {
        curNode = curNode.next;
      }
    }
    if (this.tail.value === value) {
      this.tail = curNode;
    }
  }

  preppend(value) {
    const newNode = { value: value, next: this.head };
    if (!this.head) {
      this.head = newNode;
    }
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
  }
  toArray() {
    const nodes = [];
    let curNode = this.head;
    while (curNode) {
      nodes.push(curNode);
      curNode = curNode.next;
    }
    return nodes;
  }
}

const Linkedlist1 = new Linkedlist();

Linkedlist1.append("Ikenna");
Linkedlist1.append("Ike");
Linkedlist1.preppend("Ike");
Linkedlist1.append("Cynthia");
Linkedlist1.append("Ike");
Linkedlist1.delete("Ike");

// console.log(Linkedlist1.toArray());

class Employee {
  constructor(name, title, salary) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.boss = null;
    this.subordinates = [];
  }

  addSubordinate(subordinate) {
    this.subordinates.push(subordinate);
    subordinate.boss = this;
  }

  getNumberOfSubordinates() {
    return this.subordinates.length;
  }

  getNumberOfPeopleToCEO() {
    let numberOfPeople = 0;
    let currentEmployee = this;
    while (currentEmployee.boss) {
      currentEmployee = currentEmployee.boss;
      numberOfPeople++;
    }
    return numberOfPeople;
  }

  hasSameBoss(employee) {
    return this.boss === employee.boss;
  }
}

const ada = new Employee("Ada", "CEO", 3000000);
const craig = new Employee("Craig", "VP Software", 1000000);
const arvinder = new Employee("Arvinder", "Chief Design Officer", 1000000);
const angela = new Employee("Angela", "VP Retail", 1000000);
const phil = new Employee("Phil", "VP Marketing", 1000000);
const simone = new Employee("Simone", "VP Marketing", 1000000);
const ali = new Employee("Ali", "VP Marketing", 1000000);

ada.addSubordinate(craig);
ada.addSubordinate(arvinder);
ada.addSubordinate(angela);
ada.addSubordinate(phil);
craig.addSubordinate(ali);
ali.addSubordinate(simone);

// console.log(ada.subordinates)
// console.log(craig.boss);
// console.log(ada.getNumberOfSubordinates());
// console.log(simone.getNumberOfPeopleToCEO())
// // console.log(ali.hasSameBoss(angela))

// Vampire (data structure)
class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.creator = null;
    this.offspring = [];
  }

  // Adds the vampire as an offspring of this vampire
  addVampire(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Adds the vampire as an offspring of this vampire
  numberOfOffspring() {
    return this.offspring.length;
  }
  // Returns the number of vampires away from the original vampire this vampire is
  numberOfVampiresFromOrigin() {
    let numberOfVampire = 0;
    let currentVampire = this;
    while (currentVampire.creator) {
      currentVampire = currentVampire.creator;
      numberOfVampire++;
    }
    return numberOfVampire;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    return this.numberOfVampiresFromOrigin < vampire.numberOfVampiresFromOrigin;
  }

  // Returns the closest common ancestor of two vampires
  closestCommonAncestor(vampire) {
    let currentAncestor = this;
    let vampireAncestor = vampire.creator;
  }
}

class Dicegame {
  constructor(n, m) {
    this.diceSize = n;
    this.outcomes = [];
  }

  rollDice() {
    const outcomes = [];
    for (let i = 0; i < this.diceSize; i++) {
      const rollDice = Math.floor(Math.random() * 6) + 1;
      outcomes.push(rollDice);
    }
    return outcomes;
  }

  getTotal() {
    let total = 0;
    const outcomes = this.rollDice();
    const tmp = outcomes.length;
    for (let i = 0; i < outcomes.length; i++) {
      if (outcomes[i] === 3) {
        outcomes.splice(i, 1);
      }
    }
    if (tmp > outcomes.length) {
      this.diceSize = outcomes.length;
    } else {
      this.diceSize = outcomes.length - 1;
      total = outcomes.sort()[0];
    }
    return total;
  }

  rollDices() {
    const outcomes = [];
    let sum = 0;
    while (this.diceSize > 0) {
      const num = this.getTotal();
      outcomes.push(num);
      sum += num;
    }
    return sum;
  }
}
const n = 100;
const diceSize = 2;
function playGame(n) {
  const outcomes = [];
  const counts = {};
  for (let i = 0; i < n; i++) {
    const game = new Dicegame(diceSize);
    outcomes.push(game.rollDices());
  }
  for (let outcome of outcomes) {
    if (!counts[outcome]) {
      counts[outcome] = 1;
    } else {
      counts[outcome] += 1;
    }
  }
  for (let count in counts) {
    console.log(
      `Total ${count} occurs ${counts[count] / n} occurred ${
        counts[count]
      } times.`
    );
  }
  return;
}
// console.log(`Number of simulations was ${n} using ${diceSize} dice.`);
// const start_time = performance.now()
// playGame(n);
// end_time = performance.now() - start_time;
// console.log(end_time / 1000)

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    const correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  const arr1Freq = {};
  const arr2Freq = {};
  for (let num of arr1) {
    arr1Freq[num] = (arr1Freq[num] || 0) + 1;
  }
  for (let num of arr2) {
    arr2Freq[num] = (arr2Freq[num] || 0) + 1;
  }

  for (let num in arr1Freq) {
    if (!(num ** 2 in arr2Freq)) return false;
    if (arr2Freq[num ** 2] !== arr1Freq[num]) return false;
  }
  return true;
}
// console.log(same2([3, 1, 2,1], [1, 4, 9, 1]));

function isAnagrams(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const arr1Freq = {};
  const arr2Freq = {};

  for (let num of arr1) {
    arr1Freq[num] = (arr1Freq[num] || 0) + 1;
  }
  for (let num of arr2) {
    arr2Freq[num] = (arr2Freq[num] || 0) + 1;
  }

  for (let num in arr1Freq) {
    if (!(num in arr2Freq)) return false;
    if (arr2Freq[num] !== arr1Freq[num]) return false;
  }

  return true;
}
// console.log(isAnagrams("azz", "zaz"));

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return null;
}

// console.log(sumZero([-4, -1, 0, 1, 2, 4]));

function countUnique(arr) {
  const obj = {};
  let count = 0;
  for (let num of arr) {
    if (!obj[num]) {
      count++;
      obj[num] = true;
    }
  }
  return count;
}

// console.log(countUnique([1,1,1,2,2,9,9]))
function maxSubArray(arr, num) {
  let max = 0;
  let tmpMax = 0;
  for (let i = 0; i < num; i++) {
    max += arr[i];
  }
  tmpMax = max;
  for (let i = num; i < arr.length; i++) {
    tmpMax = tmpMax + arr[i] - arr[i - num];
    max = Math.max(max, tmpMax);
  }
  return max;
}

// console.log(maxSubArray([2, 15, 3, 4, 20], 3));
//  i
// "Hello"
//   j 
function longestSubString(str) {
  let i = 0;
  let j = i + 1;
  let count = 1;
  let maxCount = 1;
  while (i < j && j < str.length) {
    if (str[i] !== str[j]) {
      count++;
      j++;
    } else {
      i = j;
      j++;
      count = 0;
    }
    maxCount = Math.max(maxCount, count);
  }
  return maxCount;
}

// console.log(longestSubString("hehloa"))

function factorial(n) {
  if (n === 1) return 1;
  return n + factorial(n-1);
}

console.log(factorial(3))
