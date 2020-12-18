// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LinkedLocation
|--------------------------------------------------------------------------
|
| Model Class and Interface of linkedLocations
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("linkedLocations")
export class LinkedLocation extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  location!: string;
  
  
}

export interface ILinkedLocation {
  id: number;
  location: string;
  
}
