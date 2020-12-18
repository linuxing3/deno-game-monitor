// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ModeOfPayment
|--------------------------------------------------------------------------
|
| Model Class and Interface of modeOfPayments
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("modeOfPayments")
export class ModeOfPayment extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  modeOfPayment!: string;
  
  @Field({ type: FieldType.STRING })
  type!: string;
  
  @Field({ type: FieldType.STRING })
  accounts!: string;
  
  
}

export interface IModeOfPayment {
  id: number;
  modeOfPayment: string;
  type: string;
  accounts: string;
  
}
