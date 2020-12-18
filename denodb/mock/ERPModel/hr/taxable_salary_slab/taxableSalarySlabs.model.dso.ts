// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: TaxableSalarySlab
|--------------------------------------------------------------------------
|
| Model Class and Interface of taxableSalarySlabs
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("taxableSalarySlabs")
export class TaxableSalarySlab extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  fromAmount!: string;
  
  @Field({ type: FieldType.STRING })
  toAmount!: string;
  
  @Field({ type: FieldType.STRING })
  percentDeduction!: string;
  
  @Field({ type: FieldType.STRING })
  condition!: string;
  
  
}

export interface ITaxableSalarySlab {
  id: number;
  fromAmount: string;
  toAmount: string;
  percentDeduction: string;
  condition: string;
  
}
