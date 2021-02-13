// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PurchaseTaxesAndChargesTemplate
|--------------------------------------------------------------------------
|
| Model Class and Interface of purchaseTaxesAndChargesTemplates
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("purchaseTaxesAndChargesTemplates")
export class PurchaseTaxesAndChargesTemplate extends BaseModel { 

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
  purchaseTaxesAndCharges!: string;
  
  
}

export interface IPurchaseTaxesAndChargesTemplate {
  id: number;
  title: string;
  default: string;
  disabled: string;
  company: string;
  purchaseTaxesAndCharges: string;
  
}
