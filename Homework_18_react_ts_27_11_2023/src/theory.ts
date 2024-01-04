export let firstName: string;

firstName = 'Andrew';

// Пример ошибки типизации
// firstName = 5;

let age: number | string = 20;

age = 590;
age = '590';

// Пример ошибки типизации
// age = {}

// Пример ошибки типизации
// age = true;

let direction: 'UP' | 'DOWN'; // direction = 'UP' or direction = 'DOWN'

direction = 'DOWN';
direction = 'UP';

let person: {
    fullName: string,
    isProgrammer: boolean
};

person = {
    fullName: 'Bill Parker',
    isProgrammer: false
}

interface IPerson {
    fullName: string,
    isProgrammer: boolean
}

let p1: IPerson = {
    fullName: 'George',
    isProgrammer: true
}

// person.age = 10; нет такого ключа в описании объекта
// person.isProgrammer = 50; ключ isProgrammer в описании объекта person является boolean

// any - отключение типизации для данной переменной

let ids: number[] = [];

ids.push(1);
// ids.push('1'); not a number

function circle(diam: number): string {
    return `Circle = ${Math.PI * diam}`;
}

let sayHi = (name: string): void => console.log('Hello ' + name);


// npx create-react-app name_of_project - for javascript
// npx create-react-app name_of_project --template typescript - for typescript