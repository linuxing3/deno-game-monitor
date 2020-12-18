// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: SalesInvoiceAdvance
|--------------------------------------------------------------------------
|
| Model Class and Interface of salesInvoiceAdvances
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("salesInvoiceAdvances")
export class SalesInvoiceAdvance extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  referenceType!: string;
  
  @Field({ type: FieldType.STRING })
  referenceName!: string;
  
  @Field({ type: FieldType.STRING })
  remarks!: string;
  
  @Field({ type: FieldType.STRING })
  referenceRow!: string;
  
  @Field({ type: FieldType.STRING })
  advanceAmount!: string;
  
  @Field({ type: FieldType.STRING })
  allocatedAmount!: string;
  
  
}

export interface ISalesInvoiceAdvance {
  id: number;
  referenceType: string;
  referenceName: string;
  remarks: string;
  referenceRow: string;
  advanceAmount: string;
  allocatedAmount: string;
  
}
