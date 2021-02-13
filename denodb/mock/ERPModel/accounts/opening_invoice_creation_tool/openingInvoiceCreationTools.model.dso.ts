// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: OpeningInvoiceCreationTool
|--------------------------------------------------------------------------
|
| Model Class and Interface of openingInvoiceCreationTools
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("openingInvoiceCreationTools")
export class OpeningInvoiceCreationTool extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  createMissingParty!: string;
  
  @Field({ type: FieldType.STRING })
  invoiceType!: string;
  
  @Field({ type: FieldType.STRING })
  invoices!: string;
  
  
}

export interface IOpeningInvoiceCreationTool {
  id: number;
  company: string;
  createMissingParty: string;
  invoiceType: string;
  invoices: string;
  
}
