import {Deserializable} from './deserializable.model';

export class User implements Deserializable {

  public id: number;

  public email: string;

  public password: string;

  public type: string;

  public createdAt: Date;

  public updatedAt: Date;

  deserialize(input: any): this {
    return Object.assign(this, input);
  }
}
