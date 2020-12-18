// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PosItemGroup
|--------------------------------------------------------------------------
|
| Model Class and Interface of posItemGroups
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("posItemGroups")
export class PosItemGroup extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  itemGroup!: string;
  
  
}

export interface IPosItemGroup {
  id: number;
  itemGroup: string;
  
}
