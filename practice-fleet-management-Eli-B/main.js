/*Scenario
You’ve been hired to help a logistics company build a system to manage its fleet of
vehicles. The system should be able to:

1. Create individual vehicles with properties like type, make, model, year, and
mileage.
2. Add a method to update the mileage of a vehicle when it is used.
3. Add a method to display the details of the vehicle in a user-friendly format.
4. Instantiate multiple vehicles from the class and test your methods.

Tasks
1. Define the Vehicle Class:
○ The constructor should include properties: type, make, model, year,
and mileage.
○ Use default values for mileage (e.g., 0).
2. Add Methods:
○ drive(distance): Increases the vehicle’s mileage by the given
distance (in kilometers or miles).
○ getDetails(): Returns a formatted string describing the vehicle’s
details.
3. Create and Use Vehicle Objects:
○ Instantiate at least three vehicle objects with different properties (e.g.,
a car, a truck, and a motorcycle).
○ Use the drive method to simulate trips and update mileage.
○ Use the getDetails method to print each vehicle’s updated
information.
*/

class Vehicle {
    constructor(type,make,model,year,milage) {
        this.type = type;
        this.make = make;
        this.model = model;
        this.year = year;
        this.milage = milage;
    }
    drive(milesDriven) {
        this.milage += milesDriven
         return this.milage ;
    }
    getDetails() {
        return `This vehicle is a ${this.year} ${this.make} ${this.model} ${this.type}, and has ${this.milage}, miles.`
    }
}

let ford = new Vehicle('Van','Ford', 'Econoline', 2003, 170854);
let volvo = new Vehicle('Suv', 'Volvo','XC90', 2009, 145960);
let honda = new Vehicle('Compact Car','Honda','Fit', 2007,90782 )

console.log("Milage: ", ford.drive(10), ford.getDetails())
console.log("Milage: ",volvo.drive(10), volvo.getDetails())
console.log("Milage: ",honda.drive(10), honda.getDetails())
