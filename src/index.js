// const EntityBase = require('./EntityBase');

// console.log(new EntityBase({
//     name: "Matheus",
//     gender: 'male'
// }).name);

// console.log(new EntityBase({
//     name: "Erica",
//     gender: 'female'
// }).name);

const assert = require('assert');
const Employee = require('./Employee');

const GENDER = {
    male: 'male',
    female: 'female'
}

{
    const employee = new Employee({
        name: 'Julia',
        gender: GENDER.female
    })

    assert.throws(() => employee.birthYear, {
        message: "You must define age first!!"
    })
}
{
    const employee = new Employee({
        name: "Matheus",
        age: 18,
        gender: GENDER.male
    })

    assert.deepStrictEqual(employee.name, 'Mr.Matheus');
}