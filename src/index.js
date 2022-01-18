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
const Manager = require('./Manager');
const Util = require('./Util');

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

const CURRENT_YEAR = 2022;
Date.prototype.getFullYear = () => CURRENT_YEAR;

{
    const employee = new Employee({
        name: "Matheus",
        age: 18,
        gender: GENDER.male
    })

    assert.deepStrictEqual(employee.name, 'Mr.Matheus');
    assert.deepStrictEqual(employee.age, undefined);
    assert.deepStrictEqual(employee.grossPay, Util.formatCurrency(5000.40));
    assert.deepStrictEqual(employee.netPay, Util.formatCurrency(4000.32));

    let expectedBirthYear = 2004;

    assert.deepStrictEqual(employee.birthYear, expectedBirthYear)

}

{
    const manager = new Manager({
        name: "Maria",
        age: 19,
        gender: GENDER.female
    });

    assert.deepStrictEqual(manager.name, 'Ms.Maria');
    assert.deepStrictEqual(manager.age, undefined);
    assert.deepStrictEqual(manager.grossPay, Util.formatCurrency(5000.40));
    assert.deepStrictEqual(manager.bonuses, Util.formatCurrency(2000));
    assert.deepStrictEqual(manager.netPay, Util.formatCurrency(6000.32));

    console.log('----- Manager -----');

    console.log('anager.name', manager.name)
    console.log('anager.age ', manager.age)
    console.log('anager.grossPay', manager.grossPay)
    console.log('anager.bonuses ', manager.bonuses)
    console.log('anager.netPay ', manager.netPay)

}