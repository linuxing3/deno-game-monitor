// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: Driver
|--------------------------------------------------------------------------
|
| Model Class and Interface of drivers
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("drivers")
export class Driver extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  series!: string;
  
  @Field({ type: FieldType.STRING })
  fullName!: string;
  
  @Field({ type: FieldType.STRING })
  status!: string;
  
  @Field({ type: FieldType.STRING })
  transporter!: string;
  
  @Field({ type: FieldType.STRING })
  employee!: string;
  
  @Field({ type: FieldType.STRING })
  cellphoneNumber!: string;
  
  @Field({ type: FieldType.STRING })
  licenseDetails!: string;
  
  @Field({ type: FieldType.STRING })
  licenseNumber!: string;
  
  @Field({ type: FieldType.STRING })
  issuingDate!: string;
  
  @Field({ type: FieldType.STRING })
  expiryDate!: string;
  
  @Field({ type: FieldType.STRING })
  drivingLicenseCategories!: string;
  
  @Field({ type: FieldType.STRING })
  drivingLicenseCategory!: string;
  
  
}

export interface IDriver {
  id: number;
  series: string;
  fullName: string;
  status: string;
  transporter: string;
  employee: string;
  cellphoneNumber: string;
  licenseDetails: string;
  licenseNumber: string;
  issuingDate: string;
  expiryDate: string;
  drivingLicenseCategories: string;
  drivingLicenseCategory: string;
  
}
