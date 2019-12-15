import {Deserializable} from './deserializable.model';

export class Ecommerce implements Deserializable {
  public id: number;

  public name: string;

  public version: string;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}
