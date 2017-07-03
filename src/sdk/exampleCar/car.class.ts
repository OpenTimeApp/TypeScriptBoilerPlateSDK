import { CarInterface } from './car.interfase'

export class Car implements CarInterface {
    private _model: string;
    private _color: string;
    private _type: string;
    private _amountOfWheels: number;
    private _vin: string;


    get model(): string {
        return this._model;
    }

    set model(value: string) {
        this._model = value;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get amountOfWheels(): number {
        return this._amountOfWheels;
    }

    set amountOfWheels(value: number) {
        this._amountOfWheels = value;
    }

    get vin(): string {
        return this._vin;
    }

    set vin(value: string) {
        this._vin = value;
    }
}