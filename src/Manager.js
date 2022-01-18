const Employee = require("./Employee");
const Util = require("./Util");

class Manager extends Employee {
    #bonuses = 2000;

    get bonuses() {
        return Util.formatCurrency(this.#bonuses);
    }

    get netPay() {
        const finallyValues = 
        Util.unFormartCurrency(super.netPay) + Util.unFormartCurrency(this.bonuses);

        return Util.formatCurrency(finallyValues);
    }

}

module.exports = Manager;