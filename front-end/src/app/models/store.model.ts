import {Deserializable} from './deserializable.model';
import {Ecommerce} from './ecommerce.model';

export class Store implements Deserializable {
  public id: number;

  public name: string;

  public auth: JSON;

  public ecommerce: Ecommerce;

  deserialize(input: any): this {
    Object.assign(this, input);
    this.ecommerce = new Ecommerce().deserialize(input.ecommerce);

    return this;
  }
}
