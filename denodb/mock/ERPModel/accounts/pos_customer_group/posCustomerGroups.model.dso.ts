// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PosCustomerGroup
|--------------------------------------------------------------------------
|
| Model Class and Interface of posCustomerGroups
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("posCustomerGroups")
export class PosCustomerGroup extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  customerGroup!: string;
  
  
}

export interface IPosCustomerGroup {
  id: number;
  customerGroup: string;
  
}
