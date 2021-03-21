// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: SalesTaxesAndCharge
|--------------------------------------------------------------------------
|
| Model Class and Interface of salesTaxesAndCharges
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("salesTaxesAndCharges")
export class SalesTaxesAndCharge extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  type!: string;
  
  @Field({ type: FieldType.STRING })
  referenceRow!: string;
  
  @Field({ type: FieldType.STRING })
  accountHead!: string;
  
  @Field({ type: FieldType.STRING })
  costCenter!: string;
  
  @Field({ type: FieldType.STRING })
  description!: string;
  
  @Field({ type: FieldType.STRING })
  isThisTaxIncludedInBasicRate!: string;
  
  @Field({ type: FieldType.STRING })
  rate!: string;
  
  @Field({ type: FieldType.STRING })
  amount!: string;
  
  @Field({ type: FieldType.STRING })
  total!: string;
  
  @Field({ type: FieldType.STRING })
  taxAmountAfterDiscountAmount!: string;
  
  @Field({ type: FieldType.STRING })
  amountCompanyCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  totalCompanyCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  taxAmountAfterDiscountAmountCompanyCurrency!: string;
  
  @Field({ type: FieldType.STRING })
  itemWiseTaxDetail!: string;
  
  @Field({ type: FieldType.STRING })
  parenttype!: string;
  
  
}

export interface ISalesTaxesAndCharge {
  id: number;
  type: string;
  referenceRow: string;
  accountHead: string;
  costCenter: string;
  description: string;
  isThisTaxIncludedInBasicRate: string;
  rate: string;
  amount: string;
  total: string;
  taxAmountAfterDiscountAmount: string;
  amountCompanyCurrency: string;
  totalCompanyCurrency: string;
  taxAmountAfterDiscountAmountCompanyCurrency: string;
  itemWiseTaxDetail: string;
  parenttype: string;
  
}
