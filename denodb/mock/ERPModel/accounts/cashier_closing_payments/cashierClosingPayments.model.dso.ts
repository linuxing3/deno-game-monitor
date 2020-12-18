// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: CashierClosingPayment
|--------------------------------------------------------------------------
|
| Model Class and Interface of cashierClosingPayments
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("cashierClosingPayments")
export class CashierClosingPayment extends BaseModel { 

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
  amount!: string;
  
  
}

export interface ICashierClosingPayment {
  id: number;
  modeOfPayment: string;
  amount: string;
  
}
