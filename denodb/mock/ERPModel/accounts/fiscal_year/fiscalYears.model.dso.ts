// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: FiscalYear
|--------------------------------------------------------------------------
|
| Model Class and Interface of fiscalYears
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("fiscalYears")
export class FiscalYear extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  yearName!: string;
  
  @Field({ type: FieldType.STRING })
  disabled!: string;
  
  @Field({ type: FieldType.STRING })
  yearStartDate!: string;
  
  @Field({ type: FieldType.STRING })
  yearEndDate!: string;
  
  @Field({ type: FieldType.STRING })
  companies!: string;
  
  @Field({ type: FieldType.STRING })
  autoCreated!: string;
  
  
}

export interface IFiscalYear {
  id: number;
  yearName: string;
  disabled: string;
  yearStartDate: string;
  yearEndDate: string;
  companies: string;
  autoCreated: string;
  
}
