import { Car } from "../../sdk/exampleCar/car.class";

describe("Car Test Suite", () => {

    let honda;

    beforeAll(() => {
        honda = new Car();
        honda.model = "Accord";
        honda.type = "Sedan";
        honda.color = "Silver";
        honda.amountOfWheels = 4;
        honda.vin = "1VFGDO7725DJJLKJHFH";
    });

    it("Car is initialized", () => {
        expect(honda).not.toBe(null);
    });

    it("Car is getting Values", () => {
        expect(honda.model).toBe("Accord");
        expect(honda.type).toBe("Sedan");
        expect(honda.color).toBe("Silver");
        expect(honda.amountOfWheels).toBe(4);
        expect(honda.vin).toBe("1VFGDO7725DJJLKJHFH");
    })

});