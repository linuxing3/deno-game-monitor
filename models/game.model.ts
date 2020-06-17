/*
|--------------------------------------------------------------------------
| Models
|--------------------------------------------------------------------------
*/

import {
  BaseModel,
  Field,
  FieldType,
  Model,
} from "../deps.ts";

// Define a database model
@Model("games")
export class GameModel extends BaseModel {
  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true,
  })
  id!: number;

  @Field({ type: FieldType.STRING, length: 30 })
  name?: string;

  @Field({ type: FieldType.STRING, length: 30 })
  description?: string;

  @Field({ type: FieldType.STRING, length: 10, notNull: true })
  pid!: string;

  @Field({ type: FieldType.STRING, length: 30 })
  timestramp?: string;
}
