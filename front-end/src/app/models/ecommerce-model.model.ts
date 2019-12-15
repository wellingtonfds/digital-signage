import {Deserializable} from './deserializable.model';
import {Ecommerce} from './ecommerce.model';
import {EcommerceModelType} from './ecommerce-model-type.model';

export class EcommerceModel implements Deserializable {
  public id: number;

  public data: JSON;

  public ecommerce: Ecommerce;

  public ecommerceModelType: EcommerceModelType;

  deserialize(input: any): this {
    Object.assign(this, input);

    this.ecommerce = new Ecommerce().deserialize(input.ecommerce);
    this.ecommerceModelType = new EcommerceModelType().deserialize(input.ecommerce);

    return this;
  }
}
