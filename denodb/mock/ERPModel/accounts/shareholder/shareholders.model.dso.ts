// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: Shareholder
|--------------------------------------------------------------------------
|
| Model Class and Interface of shareholders
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("shareholders")
export class Shareholder extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  title!: string;
  
  @Field({ type: FieldType.STRING })
  folioNo!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  isCompany!: string;
  
  @Field({ type: FieldType.STRING })
  addressAndContacts!: string;
  
  @Field({ type: FieldType.STRING })
  addressHtml!: string;
  
  @Field({ type: FieldType.STRING })
  contactHtml!: string;
  
  @Field({ type: FieldType.STRING })
  shareBalance!: string;
  
  @Field({ type: FieldType.STRING })
  contactList!: string;
  
  
}

export interface IShareholder {
  id: number;
  title: string;
  folioNo: string;
  company: string;
  isCompany: string;
  addressAndContacts: string;
  addressHtml: string;
  contactHtml: string;
  shareBalance: string;
  contactList: string;
  
}
