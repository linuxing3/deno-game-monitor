
import {
  BaseModel,
  Field,
  FieldType,
  Model,
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

// Define a database model
@Model("users")
export class UserModel extends BaseModel {
  // The ! operator is needed for primary key since it's never null 
  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number; 
  
  // We use ! since name is never null 
  @Field({ type: FieldType.STRING, length: 30, notNull: true }) 
  name!: string;

  // We use ? since password is nullable
  @Field({ type: FieldType.STRING, length: 30 }) 
  password?: string;
}
