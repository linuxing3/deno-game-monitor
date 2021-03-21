// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PurposeOfTravel
|--------------------------------------------------------------------------
|
| Model Class and Interface of purposeOfTravels
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("purposeOfTravels")
export class PurposeOfTravel extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  purposeOfTravel!: string;
  
  
}

export interface IPurposeOfTravel {
  id: number;
  purposeOfTravel: string;
  
}
