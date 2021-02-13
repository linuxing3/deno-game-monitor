// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LoyaltyPointEntryRedemption
|--------------------------------------------------------------------------
|
| Model Class and Interface of loyaltyPointEntryRedemptions
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("loyaltyPointEntryRedemptions")
export class LoyaltyPointEntryRedemption extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  salesInvoice!: string;
  
  @Field({ type: FieldType.STRING })
  redemptionDate!: string;
  
  @Field({ type: FieldType.STRING })
  redeemedPoints!: string;
  
  
}

export interface ILoyaltyPointEntryRedemption {
  id: number;
  salesInvoice: string;
  redemptionDate: string;
  redeemedPoints: string;
  
}
