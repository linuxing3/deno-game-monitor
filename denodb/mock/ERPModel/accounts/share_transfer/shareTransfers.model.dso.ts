// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ShareTransfer
|--------------------------------------------------------------------------
|
| Model Class and Interface of shareTransfers
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("shareTransfers")
export class ShareTransfer extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  transferType!: string;
  
  @Field({ type: FieldType.STRING })
  date!: string;
  
  @Field({ type: FieldType.STRING })
  fromShareholder!: string;
  
  @Field({ type: FieldType.STRING })
  fromFolioNo!: string;
  
  @Field({ type: FieldType.STRING })
  equityLiabilityAccount!: string;
  
  @Field({ type: FieldType.STRING })
  assetAccount!: string;
  
  @Field({ type: FieldType.STRING })
  toShareholder!: string;
  
  @Field({ type: FieldType.STRING })
  toFolioNo!: string;
  
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
  company!: string;
  
  @Field({ type: FieldType.STRING })
  remarks!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  
}

export interface IShareTransfer {
  id: number;
  transferType: string;
  date: string;
  fromShareholder: string;
  fromFolioNo: string;
  equityLiabilityAccount: string;
  assetAccount: string;
  toShareholder: string;
  toFolioNo: string;
  shareType: string;
  fromNo: string;
  rate: string;
  noOfShares: string;
  toNo: string;
  amount: string;
  company: string;
  remarks: string;
  amendedFrom: string;
  
}
