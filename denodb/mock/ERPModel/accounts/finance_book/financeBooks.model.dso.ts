// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: FinanceBook
|--------------------------------------------------------------------------
|
| Model Class and Interface of financeBooks
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("financeBooks")
export class FinanceBook extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  name!: string;
  
  
}

export interface IFinanceBook {
  id: number;
  name: string;
  
}
