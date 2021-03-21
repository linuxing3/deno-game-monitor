// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: BankStatementSettingsItem
|--------------------------------------------------------------------------
|
| Model Class and Interface of bankStatementSettingsItems
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("bankStatementSettingsItems")
export class BankStatementSettingsItem extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  mappedHeader!: string;
  
  @Field({ type: FieldType.STRING })
  bankHeader!: string;
  
  
}

export interface IBankStatementSettingsItem {
  id: number;
  mappedHeader: string;
  bankHeader: string;
  
}
