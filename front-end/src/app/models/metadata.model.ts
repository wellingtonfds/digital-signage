import {Deserializable} from './deserializable.model';
import {Store} from './store.model';
import {EcommerceModelType} from './ecommerce-model-type.model';

export class Metadata implements Deserializable {
  public id: number;

  public data: JSON;

  public status: string;

  public storeFrom: Store;

  public storeTo: Store;

  public ecommerceModelType: EcommerceModelType;

  deserialize(input: any): this {
    Object.assign(this, input);

    this.storeFrom = new Store().deserialize(input.storeFrom);
    this.storeTo = new Store().deserialize(input.storeTo);
    this.ecommerceModelType = new Store().deserialize(input.ecommerceModelType);

    return this;
  }
}
