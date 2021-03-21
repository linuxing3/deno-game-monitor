// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: AllowedToTransactWith
|--------------------------------------------------------------------------
|
| Model Class and Interface of allowedToTransactWiths
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("allowedToTransactWiths")
export class AllowedToTransactWith extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  company!: string;
  
  
}

export interface IAllowedToTransactWith {
  id: number;
  company: string;
  
}
