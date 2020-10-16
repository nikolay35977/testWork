export const ProtoType = function () {
    const Car = function (options) {
        this.model = options.model;
        this.color = options.color;
        this.mileage = options.mileage;

        this.previewCar = function () {
            console.log(`This car is ${this.model} color: ${this.color}`);
        }
    }
    
    Car.prototype.isGoodCar = function () {
        console.log(`Car ${this.model} is good`)
    }
    const Lada = new Car({model: 'Granta', color: 'blue', mileage: 30000});

    Lada.prototype = Object.create(Car.prototype);
    Lada.prototype.constructor = Lada

    console.log(Lada.model);
    Lada.isGoodCar()
    Lada.previewCar()

}