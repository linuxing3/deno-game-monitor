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
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class DrivingLicenseCategory extends Model { 
  static table = "drivingLicenseCategories";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    class: DataTypes.STRING,
    description: DataTypes.STRING,
    issuingDate: DataTypes.STRING,
    expiryDate: DataTypes.STRING,
    
  };

}
