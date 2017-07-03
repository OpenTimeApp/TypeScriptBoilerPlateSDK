// import { OTBPCarService } from "../../sdk/apis/car/otbp-car.service";
// import {TestHelper} from "../otwp-test-helper";
// import {OTBPGetCarResponse} from "../../sdk/apis/car/get-car/otbp-get-car-response";
//
// describe("Car Service Test Suite", () => {
//
//     beforeAll((done) => {
//         TestHelper.beforeAll();
//         // TestHelper.restoreData(['make_cars'], (response) => {
//         //     if (!response.success) {
//         //         fail(response.message);
//         //     }
//         //     done();
//         // });
//     });
//
//     let service: OTBPCarService;
//
//     beforeEach(() => {
//         service = new OTBPCarService();
//     });
//
//     describe('Method: getCar ', () => {
//         it('should return a car', (done) => {
//             service.getCar("1VFGDO7725DJJLKJHFH", (response: OTBPGetCarResponse) => {
//                 expect(response.getSuccess()).toBe(true, response.getErrorMessages());
//                 if (response.getSuccess()) {
//
//                     let group = response.getCar();
//
//                     expect(group.getModel).toBe("Accord");
//                     expect(group.getType()).toBe("Sedan");
//                     expect(group.getColor()).toBe("Silver");
//                     expect(group.getVIN()).toBe("1VFGDO7725DJJLKJHFH");
//                     expect(group.getAmountOfWheels()).toBe(4);
//
//                 }
//                 done();
//             });
//         })
//     });
//
// });