// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: RetentionBonu
|--------------------------------------------------------------------------
|
| Model Class and Interface of retentionBonuses
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class RetentionBonu extends Model { 
  static table = "retentionBonuses";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    company: DataTypes.STRING,
    employee: DataTypes.STRING,
    bonusPaymentDate: DataTypes.STRING,
    bonusAmount: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    employeeName: DataTypes.STRING,
    department: DataTypes.STRING,
    dateOfJoining: DataTypes.STRING,
    
  };

}
