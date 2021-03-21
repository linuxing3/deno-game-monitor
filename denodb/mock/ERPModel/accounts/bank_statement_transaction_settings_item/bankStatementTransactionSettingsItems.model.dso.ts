// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: BankStatementTransactionSettingsItem
|--------------------------------------------------------------------------
|
| Model Class and Interface of bankStatementTransactionSettingsItems
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("bankStatementTransactionSettingsItems")
export class BankStatementTransactionSettingsItem extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  mappingType!: string;
  
  @Field({ type: FieldType.STRING })
  bankData!: string;
  
  @Field({ type: FieldType.STRING })
  mappedDataType!: string;
  
  @Field({ type: FieldType.STRING })
  mappedData!: string;
  
  
}

export interface IBankStatementTransactionSettingsItem {
  id: number;
  mappingType: string;
  bankData: string;
  mappedDataType: string;
  mappedData: string;
  
}
