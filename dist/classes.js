"use strict";
class UserAccount {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    logDetails() {
        console.log(`The Player ${this.name} is ${this.age} years old.`);
    }
}
class CharAccount extends UserAccount {
    constructor(name, age, nickname, level) {
        super(name, age);
        this.nickname = nickname;
        this.level = level;
    }
    get getAge() {
        console.log('-------Get--------');
        return this.age;
    }
    set seAge(age) {
        this.age = age;
    }
    logCharDetails() {
        console.log(`The player ${this.name} is ${this.age} and has the char ${this.nickname} at level ${this.level}`);
    }
}
// const marc = new UserAccount('Marcelo', 30);
// console.log(marc);
// console.log(marc.age);
// marc.logDetails();
const john = new CharAccount("John", 45, "johnmaster", 80);
console.log(john);
console.log(john.level);
john.logDetails();
john.logCharDetails();
john.seAge = 90;
console.log(john.getAge);
