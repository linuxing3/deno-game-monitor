// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LoyaltyProgram
|--------------------------------------------------------------------------
|
| Model Class and Interface of loyaltyPrograms
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("loyaltyPrograms")
export class LoyaltyProgram extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  loyaltyProgramName!: string;
  
  @Field({ type: FieldType.STRING })
  loyaltyProgramType!: string;
  
  @Field({ type: FieldType.STRING })
  fromDate!: string;
  
  @Field({ type: FieldType.STRING })
  toDate!: string;
  
  @Field({ type: FieldType.STRING })
  customerGroup!: string;
  
  @Field({ type: FieldType.STRING })
  customerTerritory!: string;
  
  @Field({ type: FieldType.STRING })
  autoOptInForAllCustomers!: string;
  
  @Field({ type: FieldType.STRING })
  collectionTier!: string;
  
  @Field({ type: FieldType.STRING })
  collectionRules!: string;
  
  @Field({ type: FieldType.STRING })
  redemption!: string;
  
  @Field({ type: FieldType.STRING })
  conversionFactor!: string;
  
  @Field({ type: FieldType.STRING })
  expiryDurationInDays!: string;
  
  @Field({ type: FieldType.STRING })
  expenseAccount!: string;
  
  @Field({ type: FieldType.STRING })
  costCenter!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  helpSection!: string;
  
  @Field({ type: FieldType.STRING })
  loyaltyProgramHelp!: string;
  
  
}

export interface ILoyaltyProgram {
  id: number;
  loyaltyProgramName: string;
  loyaltyProgramType: string;
  fromDate: string;
  toDate: string;
  customerGroup: string;
  customerTerritory: string;
  autoOptInForAllCustomers: string;
  collectionTier: string;
  collectionRules: string;
  redemption: string;
  conversionFactor: string;
  expiryDurationInDays: string;
  expenseAccount: string;
  costCenter: string;
  company: string;
  helpSection: string;
  loyaltyProgramHelp: string;
  
}
