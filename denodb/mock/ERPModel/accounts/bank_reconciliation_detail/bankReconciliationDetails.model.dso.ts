// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: BankReconciliationDetail
|--------------------------------------------------------------------------
|
| Model Class and Interface of bankReconciliationDetails
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("bankReconciliationDetails")
export class BankReconciliationDetail extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  paymentDocument!: string;
  
  @Field({ type: FieldType.STRING })
  paymentEntry!: string;
  
  @Field({ type: FieldType.STRING })
  againstAccount!: string;
  
  @Field({ type: FieldType.STRING })
  amount!: string;
  
  @Field({ type: FieldType.STRING })
  postingDate!: string;
  
  @Field({ type: FieldType.STRING })
  chequeNumber!: string;
  
  @Field({ type: FieldType.STRING })
  chequeDate!: string;
  
  @Field({ type: FieldType.STRING })
  clearanceDate!: string;
  
  
}

export interface IBankReconciliationDetail {
  id: number;
  paymentDocument: string;
  paymentEntry: string;
  againstAccount: string;
  amount: string;
  postingDate: string;
  chequeNumber: string;
  chequeDate: string;
  clearanceDate: string;
  
}
