// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: GstAccount
|--------------------------------------------------------------------------
|
| Model Class and Interface of gstAccounts
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("gstAccounts")
export class GstAccount extends BaseModel { 

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
  cgstAccount!: string;
  
  @Field({ type: FieldType.STRING })
  sgstAccount!: string;
  
  @Field({ type: FieldType.STRING })
  igstAccount!: string;
  
  @Field({ type: FieldType.STRING })
  cessAccount!: string;
  
  
}

export interface IGstAccount {
  id: number;
  company: string;
  cgstAccount: string;
  sgstAccount: string;
  igstAccount: string;
  cessAccount: string;
  
}
