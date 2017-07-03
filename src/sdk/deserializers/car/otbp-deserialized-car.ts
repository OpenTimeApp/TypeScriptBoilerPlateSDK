export class OTBPDeserializedCar {

  private _model: string;
  private _type: string;
  private _vin: string;
  private _color: string;
  private _amountOfWheels: number;

  public constructor(rawData: any) {
    this._setModel(rawData.model);
    this._setType(rawData.type);
    this._setVIN(rawData.vin);
    this._setColor(rawData.color);
    this._setAmountOfWheels(rawData.amountOfWheels);
  }

  //region setters

  private _setModel(value: string) {
    this._model = value;
  }

  private _setType(value: string) {
    this._type = value;
  }

  private _setVIN(value: string) {
    this._vin = value;
  }

  private _setAmountOfWheels(value: number) {
    this._amountOfWheels = value;
  }

  private _setColor(value: string){
      this._color = value;
  }

  //endregion

  public getModel(): string {
    return this._model;
  }

  public getType(): string {
    return this._type;
  }

  public getVIN(): string {
    return this._vin;
  }

  public getColor(): string {
      return this._color;
  }

  public getAmountOfWheels(): number {
    return this._amountOfWheels;
  }
}