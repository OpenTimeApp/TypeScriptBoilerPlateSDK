import { OTBPResponse } from "../../../api/otbp-response";
import { OTBPDeserializedCar } from "../../../deserializers/car/otbp-deserialized-car";

export class OTBPGetCarResponse extends OTBPResponse {

  private _car: OTBPDeserializedCar;

  constructor(rawData: any) {
    super(rawData);
    if (this.getSuccess()) {
      this._car = new OTBPDeserializedCar(rawData.data);
    }
  }

  public getCar(): OTBPDeserializedCar {
    return this._car;
  }

}