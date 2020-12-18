// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: FiscalYearCompany
|--------------------------------------------------------------------------
|
| Model Class and Interface of fiscalYearCompanies
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("fiscalYearCompanies")
export class FiscalYearCompany extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  company!: string;
  
  
}

export interface IFiscalYearCompany {
  id: number;
  company: string;
  
}
