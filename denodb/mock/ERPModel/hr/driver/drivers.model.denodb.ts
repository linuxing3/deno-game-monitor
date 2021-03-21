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
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class Driver extends Model { 
  static table = "drivers";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    series: DataTypes.STRING,
    fullName: DataTypes.STRING,
    status: DataTypes.STRING,
    transporter: DataTypes.STRING,
    employee: DataTypes.STRING,
    cellphoneNumber: DataTypes.STRING,
    licenseDetails: DataTypes.STRING,
    licenseNumber: DataTypes.STRING,
    issuingDate: DataTypes.STRING,
    expiryDate: DataTypes.STRING,
    drivingLicenseCategories: DataTypes.STRING,
    drivingLicenseCategory: DataTypes.STRING,
    
  };

}
