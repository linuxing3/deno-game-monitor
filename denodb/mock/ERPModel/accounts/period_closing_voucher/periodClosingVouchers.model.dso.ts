// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PeriodClosingVoucher
|--------------------------------------------------------------------------
|
| Model Class and Interface of periodClosingVouchers
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("periodClosingVouchers")
export class PeriodClosingVoucher extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  transactionDate!: string;
  
  @Field({ type: FieldType.STRING })
  postingDate!: string;
  
  @Field({ type: FieldType.STRING })
  closingFiscalYear!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  closingAccountHead!: string;
  
  @Field({ type: FieldType.STRING })
  remarks!: string;
  
  
}

export interface IPeriodClosingVoucher {
  id: number;
  transactionDate: string;
  postingDate: string;
  closingFiscalYear: string;
  amendedFrom: string;
  company: string;
  closingAccountHead: string;
  remarks: string;
  
}
