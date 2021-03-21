// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: AssetMovement
|--------------------------------------------------------------------------
|
| Model Class and Interface of assetMovements
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("assetMovements")
export class AssetMovement extends BaseModel { 

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
  purpose!: string;
  
  @Field({ type: FieldType.STRING })
  asset!: string;
  
  @Field({ type: FieldType.STRING })
  transactionDate!: string;
  
  @Field({ type: FieldType.STRING })
  quantity!: string;
  
  @Field({ type: FieldType.STRING })
  selectSerialNo!: string;
  
  @Field({ type: FieldType.STRING })
  serialNo!: string;
  
  @Field({ type: FieldType.STRING })
  sourceLocation!: string;
  
  @Field({ type: FieldType.STRING })
  targetLocation!: string;
  
  @Field({ type: FieldType.STRING })
  fromEmployee!: string;
  
  @Field({ type: FieldType.STRING })
  toEmployee!: string;
  
  @Field({ type: FieldType.STRING })
  reference!: string;
  
  @Field({ type: FieldType.STRING })
  referenceDocType!: string;
  
  @Field({ type: FieldType.STRING })
  referenceName!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  
}

export interface IAssetMovement {
  id: number;
  company: string;
  purpose: string;
  asset: string;
  transactionDate: string;
  quantity: string;
  selectSerialNo: string;
  serialNo: string;
  sourceLocation: string;
  targetLocation: string;
  fromEmployee: string;
  toEmployee: string;
  reference: string;
  referenceDocType: string;
  referenceName: string;
  amendedFrom: string;
  
}
