// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ShareType
|--------------------------------------------------------------------------
|
| Model Class and Interface of shareTypes
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("shareTypes")
export class ShareType extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  title!: string;
  
  @Field({ type: FieldType.STRING })
  description!: string;
  
  
}

export interface IShareType {
  id: number;
  title: string;
  description: string;
  
}
