import { Model, FieldType } from "https://deno.land/x/cotton/mod.ts";
// Define a database model

export class UserModel extends Model {
  static tableName = "users";
  static fields = {
    name: { type: FieldType.STRING },
    password: { type: FieldType.STRING },
    email: { type: FieldType.STRING },
    created_at: { type: FieldType.DATE },
    updated_at: { type: FieldType.DATE },
  };

  name!: string;
  password!: string;
  email!: string;
  created_at!: Date;
  updated_at!: Date;
}