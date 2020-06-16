import {
  BaseModel,
  Field,
  FieldType,
  Model,
} from "../deps.ts";

// Define a database model
@Model("documents")
export class DocumentModel extends BaseModel {
  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true,
  })
  id!: number;


  @Field({ type: FieldType.STRING, length: 30 })
  title?: string;

  @Field({ type: FieldType.STRING, length: 30 })
  document?: string;

}