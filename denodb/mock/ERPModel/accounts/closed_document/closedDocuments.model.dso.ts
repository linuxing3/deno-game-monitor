// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ClosedDocument
|--------------------------------------------------------------------------
|
| Model Class and Interface of closedDocuments
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("closedDocuments")
export class ClosedDocument extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  documentType!: string;
  
  @Field({ type: FieldType.STRING })
  closed!: string;
  
  
}

export interface IClosedDocument {
  id: number;
  documentType: string;
  closed: string;
  
}
