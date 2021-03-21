// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: IdentificationDocumentType
|--------------------------------------------------------------------------
|
| Model Class and Interface of identificationDocumentTypes
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("identificationDocumentTypes")
export class IdentificationDocumentType extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  identificationDocumentType!: string;
  
  
}

export interface IIdentificationDocumentType {
  id: number;
  identificationDocumentType: string;
  
}
