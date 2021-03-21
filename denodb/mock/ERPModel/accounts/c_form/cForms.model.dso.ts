// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: CForm
|--------------------------------------------------------------------------
|
| Model Class and Interface of cForms
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("cForms")
export class CForm extends BaseModel { 

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
  cFormNo!: string;
  
  @Field({ type: FieldType.STRING })
  receivedDate!: string;
  
  @Field({ type: FieldType.STRING })
  customer!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  quarter!: string;
  
  @Field({ type: FieldType.STRING })
  totalAmount!: string;
  
  @Field({ type: FieldType.STRING })
  state!: string;
  
  @Field({ type: FieldType.STRING })
  invoices!: string;
  
  @Field({ type: FieldType.STRING })
  totalInvoicedAmount!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  
}

export interface ICForm {
  id: number;
  series: string;
  cFormNo: string;
  receivedDate: string;
  customer: string;
  company: string;
  quarter: string;
  totalAmount: string;
  state: string;
  invoices: string;
  totalInvoicedAmount: string;
  amendedFrom: string;
  
}
