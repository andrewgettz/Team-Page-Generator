//Code to define and export the mgr class 
const Employee = require(".Employee.js"); 
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        //Employee consturctors are name, id, email
        super(name, id, email); 

        //Constructors unique to Manager 
        this.officeNumber = officeNumber; 
        //overrides employee role from parent Employee class 
        this.role = "Manager";
    }

    getOfficceNumber() {
        return this.officeNumber;
    }

}

module.exports = Manager; 