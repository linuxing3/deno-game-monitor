// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LoyaltyPointEntry
|--------------------------------------------------------------------------
|
| Model Class and Interface of loyaltyPointEntries
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("loyaltyPointEntries")
export class LoyaltyPointEntry extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  loyaltyProgram!: string;
  
  @Field({ type: FieldType.STRING })
  loyaltyProgramTier!: string;
  
  @Field({ type: FieldType.STRING })
  customer!: string;
  
  @Field({ type: FieldType.STRING })
  salesInvoice!: string;
  
  @Field({ type: FieldType.STRING })
  redeemAgainst!: string;
  
  @Field({ type: FieldType.STRING })
  loyaltyPoints!: string;
  
  @Field({ type: FieldType.STRING })
  purchaseAmount!: string;
  
  @Field({ type: FieldType.STRING })
  expiryDate!: string;
  
  @Field({ type: FieldType.STRING })
  postingDate!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  
}

export interface ILoyaltyPointEntry {
  id: number;
  loyaltyProgram: string;
  loyaltyProgramTier: string;
  customer: string;
  salesInvoice: string;
  redeemAgainst: string;
  loyaltyPoints: string;
  purchaseAmount: string;
  expiryDate: string;
  postingDate: string;
  company: string;
  
}
