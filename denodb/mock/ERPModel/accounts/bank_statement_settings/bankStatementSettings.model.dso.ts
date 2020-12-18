// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: BankStatementSetting
|--------------------------------------------------------------------------
|
| Model Class and Interface of bankStatementSettings
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("bankStatementSettings")
export class BankStatementSetting extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  bankAccount!: string;
  
  @Field({ type: FieldType.STRING })
  dateFormat!: string;
  
  @Field({ type: FieldType.STRING })
  statementHeaderMapping!: string;
  
  @Field({ type: FieldType.STRING })
  statementHeaders!: string;
  
  @Field({ type: FieldType.STRING })
  transactionDataMapping!: string;
  
  @Field({ type: FieldType.STRING })
  mappedItems!: string;
  
  
}

export interface IBankStatementSetting {
  id: number;
  bankAccount: string;
  dateFormat: string;
  statementHeaderMapping: string;
  statementHeaders: string;
  transactionDataMapping: string;
  mappedItems: string;
  
}
