// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LoanType
|--------------------------------------------------------------------------
|
| Model Class and Interface of loanTypes
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class LoanType extends Model { 
  static table = "loanTypes";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    loanName: DataTypes.STRING,
    maximumLoanAmount: DataTypes.STRING,
    rateOfInterestYearly: DataTypes.STRING,
    disabled: DataTypes.STRING,
    description: DataTypes.STRING,
    
  };

}
