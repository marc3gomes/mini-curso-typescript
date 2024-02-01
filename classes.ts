abstract class UserAccount {
    public name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    logDetails(): void {
        console.log(`The Player ${this.name} is ${this.age} years old.`);
    }
}

class CharAccount extends UserAccount {
    private nickname: string;
    readonly level: number;

    constructor(name: string, age: number, nickname: string, level: number) {
        super(name, age);

        this.nickname = nickname;
        this.level = level;
    }

    get getAge() {
        console.log('-------Get--------')
        return this.age
    }

    set seAge(age: number) {
        this.age = age
    }

    logCharDetails(): void {
        console.log(`The player ${this.name} is ${this.age} and has the char ${this.nickname} at level ${this.level}`
        );
    }
}

// const marc = new UserAccount('Marcelo', 30);
// console.log(marc);
// console.log(marc.age);
// marc.logDetails();

const john = new CharAccount("John", 45, "johnmaster", 80)
console.log(john)
console.log(john.level)
john.logDetails();
john.logCharDetails();

john.seAge = 90

console.log(john.getAge)