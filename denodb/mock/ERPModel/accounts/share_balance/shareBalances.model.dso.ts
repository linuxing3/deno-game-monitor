// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ShareBalance
|--------------------------------------------------------------------------
|
| Model Class and Interface of shareBalances
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("shareBalances")
export class ShareBalance extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  shareType!: string;
  
  @Field({ type: FieldType.STRING })
  fromNo!: string;
  
  @Field({ type: FieldType.STRING })
  rate!: string;
  
  @Field({ type: FieldType.STRING })
  noOfShares!: string;
  
  @Field({ type: FieldType.STRING })
  toNo!: string;
  
  @Field({ type: FieldType.STRING })
  amount!: string;
  
  @Field({ type: FieldType.STRING })
  isCompany!: string;
  
  @Field({ type: FieldType.STRING })
  currentState!: string;
  
  
}

export interface IShareBalance {
  id: number;
  shareType: string;
  fromNo: string;
  rate: string;
  noOfShares: string;
  toNo: string;
  amount: string;
  isCompany: string;
  currentState: string;
  
}
