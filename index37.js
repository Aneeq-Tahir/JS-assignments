class make_car {
    constructor(manufacturer, model, color, engine) {
        this.manufacturer = manufacturer;
        this.modelName = model;
        this.color = color
        this.engine = engine
    }
}

const obj = new make_car("Honda", "Accord", "Black", "1800CC")

console.log(obj);