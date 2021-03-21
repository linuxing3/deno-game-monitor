// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeePromotion
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeePromotions
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class EmployeePromotion extends Model { 
  static table = "employeePromotions";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    employee: DataTypes.STRING,
    employeeName: DataTypes.STRING,
    department: DataTypes.STRING,
    promotionDate: DataTypes.STRING,
    company: DataTypes.STRING,
    employeePromotionDetails: DataTypes.STRING,
    employeePromotionDetail: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
  };

}
