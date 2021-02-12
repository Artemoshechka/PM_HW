//First task
class Yolo{
    static counter = 0;

    callMe(){
        Yolo.counter++
    }

    callCount() {
        return Yolo.counter;
    }
}

const yolo_1 = new Yolo();
const yolo_2 = new Yolo();

console.log(yolo_1.callCount())
yolo_1.callMe()
console.log(`Counter: ${yolo_1.callCount()}`)
yolo_2.callMe()
console.log(`Counter: ${yolo_2.callCount()}`)

//Second task

class PersonGenderError extends Error {
    constructor(message){
        super(message);
    }

    toString() {
        return `${this.name} ${this.message}`;
    }
}

class Person {
    static GENDER = {
        NOT_DEFINED: 0,
        MALE: 1,
        FEMALE: 2,
    };

    _name = "NoName";
    _gender = Person.GENDER.NOT_DEFINED;

    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        if (name !== "") {
            this._name = name;
        }
    }

    get gender() {
        return this._gender;
    }

    set gender(gender) {
        try {
            if (gender === 0 || gender === 1 || gender === 2) {
                this._gender = gender;
            } else throw new PersonGenderError("Gender is expected/invalid");
        } catch (e) {
            console.log(e.message);
        }
    }
}

const test_1 = new Person('');
const test_2 = new Person('Artemonster', 2);
const test_3 = new Person('Yolo', 6);
const test_4 = new Person('The normal one', 2);

console.log(test_1);
console.log(test_2);
console.log(test_3);
console.log(test_4);

//Task 3
class PersonLog extends Person {
    get logs() {
        return this._logs;
    }

    constructor(name, gender) {
        super(name, gender);
        this._logs = [];

        Object.preventExtensions(this);
    }

    set name(newValue) {
        if (newValue !== '') {
            let oldValue = this._name;
            this._name = newValue;
            if (this._logs) {
                this._logs.push(`Name: ${oldValue} ${newValue}`);
            }
        }
    }

    set gender(newValue) {
        if (newValue !== "") {
            let oldValue = this._gender;
            this._gender = newValue;
            if (this._logs) {
                this._logs.push(
                    `Gender: ${oldValue} ${newValue}`
                );
            }
        }
    }
}

const yolo_yolo = new PersonLog('Masterbaiter', 2);

yolo_yolo.name = 'Changes';
console.log(yolo_yolo);

yolo_yolo.gender = 0;
console.log(yolo_yolo);

console.log(yolo_yolo.logs);