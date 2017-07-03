import { OTBPRequest } from "../../api/otbp-request";
import { OTBPGetCarResponse } from "./get-car/otbp-get-car-response";

export class OTBPCarService {

  private static readonly API = 'car';

  public getCar(vin: string, callback: (response: OTBPGetCarResponse) => void): void {
    let request = new OTBPRequest();

    let fakeResponseText = '{"success":true,"message":"Got car successfully","data":{"vin":"1VFGDO7725DJJLKJHFH","model":"Accord","type":"Sedan","color":"Silver","amountOfWheels":4}}';
    let fakeResponse = JSON.parse(fakeResponseText);

    let response = new OTBPGetCarResponse(fakeResponse);
    callback(response);

    // request.getResponse(
    //   OTBPCarService.API,
    //     'profile/' + vin,
    //   'GET',
    //   {},
    //   (responseObject: any) => {
    //     let response = new OTBPGetCarResponse(fakeResponse);
    //     callback(response);
    //   }
    // )
  }

}