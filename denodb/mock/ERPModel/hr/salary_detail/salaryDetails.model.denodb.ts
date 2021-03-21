// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: SalaryDetail
|--------------------------------------------------------------------------
|
| Model Class and Interface of salaryDetails
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class SalaryDetail extends Model { 
  static table = "salaryDetails";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    component: DataTypes.STRING,
    abbr: DataTypes.STRING,
    statisticalComponent: DataTypes.STRING,
    isTaxApplicable: DataTypes.STRING,
    isFlexibleBenefit: DataTypes.STRING,
    isAdditionalComponent: DataTypes.STRING,
    variableBasedOnTaxableSalary: DataTypes.STRING,
    dependsOnLeaveWithoutPay: DataTypes.STRING,
    condition: DataTypes.STRING,
    amountBasedOnFormula: DataTypes.STRING,
    formula: DataTypes.STRING,
    amount: DataTypes.STRING,
    doNotIncludeInTotal: DataTypes.STRING,
    defaultAmount: DataTypes.STRING,
    taxOnFlexibleBenefit: DataTypes.STRING,
    taxOnAdditionalSalary: DataTypes.STRING,
    conditionAndFormulaHelp: DataTypes.STRING,
    
  };

}
