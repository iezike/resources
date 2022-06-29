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
    return (
      this.numberOfVampiresFromOrigin < vampire.numberOfVampiresFromOrigin
    );
  }

  // Returns the closest common ancestor of two vampires
  closestCommonAncestor(vampire) {
    let currentAncestor = this;
    let vampireAncestor = vampire.creator;
  }
}
