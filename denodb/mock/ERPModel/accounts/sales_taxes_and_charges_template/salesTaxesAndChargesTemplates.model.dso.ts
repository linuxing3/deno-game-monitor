// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: SalesTaxesAndChargesTemplate
|--------------------------------------------------------------------------
|
| Model Class and Interface of salesTaxesAndChargesTemplates
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("salesTaxesAndChargesTemplates")
export class SalesTaxesAndChargesTemplate extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  title!: string;
  
  @Field({ type: FieldType.STRING })
  default!: string;
  
  @Field({ type: FieldType.STRING })
  disabled!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  salesTaxesAndCharges!: string;
  
  
}

export interface ISalesTaxesAndChargesTemplate {
  id: number;
  title: string;
  default: string;
  disabled: string;
  company: string;
  salesTaxesAndCharges: string;
  
}
