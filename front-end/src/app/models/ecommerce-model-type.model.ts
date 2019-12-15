import {Deserializable} from './deserializable.model';

export class EcommerceModelType implements Deserializable {
  public id: number;

  public name: string;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}
