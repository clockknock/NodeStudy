class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    say() {
        console.log(`name:${this.name},age:${this.age}`);
    }
}

let person = new Person("zs", 123);

person.say();