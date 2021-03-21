// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeBenefitApplicationDetail
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeBenefitApplicationDetails
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class EmployeeBenefitApplicationDetail extends Model { 
  static table = "employeeBenefitApplicationDetails";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    earningComponent: DataTypes.STRING,
    payAgainstBenefitClaim: DataTypes.STRING,
    maxBenefitAmount: DataTypes.STRING,
    amount: DataTypes.STRING,
    
  };

}
