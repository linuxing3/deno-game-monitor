// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: CFormInvoiceDetail
|--------------------------------------------------------------------------
|
| Model Class and Interface of cFormInvoiceDetails
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("cFormInvoiceDetails")
export class CFormInvoiceDetail extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  invoiceNo!: string;
  
  @Field({ type: FieldType.STRING })
  invoiceDate!: string;
  
  @Field({ type: FieldType.STRING })
  territory!: string;
  
  @Field({ type: FieldType.STRING })
  netTotal!: string;
  
  @Field({ type: FieldType.STRING })
  grandTotal!: string;
  
  
}

export interface ICFormInvoiceDetail {
  id: number;
  invoiceNo: string;
  invoiceDate: string;
  territory: string;
  netTotal: string;
  grandTotal: string;
  
}
