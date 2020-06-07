
import {
  BaseModel,
  Field,
  FieldType,
  Model,
  CottonModel,
  CottonFieldType
} from "../deps.ts";

// Define a database model
@Model("users")
export class UserModel extends BaseModel {
  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number; 
  
  @Field({ type: FieldType.STRING, length: 30, notNull: true }) 
  name!: string;

  // FIXEM: password is hashed and needs long string, over 100
  @Field({ type: FieldType.STRING, length: 100, notNull: true  })
  password!: string;

  @Field({ type: FieldType.STRING, length: 30 }) 
  email?: string;
}

export class User extends CottonModel {
  static tableName = "users";
  static fields = {
    name: { type: CottonFieldType.STRING },
    password: { type: CottonFieldType.STRING },
    email: { type: CottonFieldType.STRING },
    created_at: { type: CottonFieldType.DATE },
    updated_at: { type: CottonFieldType.DATE },
  };

  name!: string;
  password!: string;
  email!: string;
  created_at!: Date;
  updated_at!: Date;
}