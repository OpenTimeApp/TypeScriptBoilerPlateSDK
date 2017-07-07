import { OTBPCarService } from "../../sdk/apis/car/otbp-car.service";
import {OTBPGetCarResponse} from "../../sdk/apis/car/get-car/otbp-get-car-response";

describe("Car Service Test Suite", () => {

    let service: OTBPCarService;

    beforeEach(() => {
        service = new OTBPCarService();
    });

    describe('Method: getCar ', () => {
        it('should return a car', (done) => {

            service.getCar("1VFGDO7725DJJLKJHFH", (response: OTBPGetCarResponse) => {

                expect(response.getSuccess()).toBe(true, response.getErrorMessages());

                if (response.getSuccess()) {

                    let car = response.getCar();

                    expect(car.getModel()).toBe("Accord");
                    expect(car.getType()).toBe("Sedan");
                    expect(car.getColor()).toBe("Silver");
                    expect(car.getVIN()).toBe("1VFGDO7725DJJLKJHFH");
                    expect(car.getAmountOfWheels()).toBe(4);

                }
                done();
            });
        })
    });

});