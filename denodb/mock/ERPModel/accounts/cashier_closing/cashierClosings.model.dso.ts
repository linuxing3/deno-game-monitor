// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: CashierClosing
|--------------------------------------------------------------------------
|
| Model Class and Interface of cashierClosings
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("cashierClosings")
export class CashierClosing extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  series!: string;
  
  @Field({ type: FieldType.STRING })
  user!: string;
  
  @Field({ type: FieldType.STRING })
  date!: string;
  
  @Field({ type: FieldType.STRING })
  fromTime!: string;
  
  @Field({ type: FieldType.STRING })
  toTime!: string;
  
  @Field({ type: FieldType.STRING })
  expense!: string;
  
  @Field({ type: FieldType.STRING })
  custody!: string;
  
  @Field({ type: FieldType.STRING })
  returns!: string;
  
  @Field({ type: FieldType.STRING })
  outstandingAmount!: string;
  
  @Field({ type: FieldType.STRING })
  payments!: string;
  
  @Field({ type: FieldType.STRING })
  netAmount!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  
}

export interface ICashierClosing {
  id: number;
  series: string;
  user: string;
  date: string;
  fromTime: string;
  toTime: string;
  expense: string;
  custody: string;
  returns: string;
  outstandingAmount: string;
  payments: string;
  netAmount: string;
  amendedFrom: string;
  
}
