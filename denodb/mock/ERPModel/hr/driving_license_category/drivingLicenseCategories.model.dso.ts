// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: DrivingLicenseCategory
|--------------------------------------------------------------------------
|
| Model Class and Interface of drivingLicenseCategories
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("drivingLicenseCategories")
export class DrivingLicenseCategory extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  class!: string;
  
  @Field({ type: FieldType.STRING })
  description!: string;
  
  @Field({ type: FieldType.STRING })
  issuingDate!: string;
  
  @Field({ type: FieldType.STRING })
  expiryDate!: string;
  
  
}

export interface IDrivingLicenseCategory {
  id: number;
  class: string;
  description: string;
  issuingDate: string;
  expiryDate: string;
  
}
