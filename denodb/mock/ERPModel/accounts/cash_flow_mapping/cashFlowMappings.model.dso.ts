// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: CashFlowMapping
|--------------------------------------------------------------------------
|
| Model Class and Interface of cashFlowMappings
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("cashFlowMappings")
export class CashFlowMapping extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  name!: string;
  
  @Field({ type: FieldType.STRING })
  label!: string;
  
  @Field({ type: FieldType.STRING })
  accounts!: string;
  
  @Field({ type: FieldType.STRING })
  selectMaximumOf_1!: string;
  
  @Field({ type: FieldType.STRING })
  isFinanceCost!: string;
  
  @Field({ type: FieldType.STRING })
  isWorkingCapital!: string;
  
  @Field({ type: FieldType.STRING })
  isFinanceCostAdjustment!: string;
  
  @Field({ type: FieldType.STRING })
  isIncomeTaxLiability!: string;
  
  @Field({ type: FieldType.STRING })
  isIncomeTaxExpense!: string;
  
  
}

export interface ICashFlowMapping {
  id: number;
  name: string;
  label: string;
  accounts: string;
  selectMaximumOf_1: string;
  isFinanceCost: string;
  isWorkingCapital: string;
  isFinanceCostAdjustment: string;
  isIncomeTaxLiability: string;
  isIncomeTaxExpense: string;
  
}
