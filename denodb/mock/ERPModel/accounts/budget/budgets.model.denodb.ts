// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: Budget
|--------------------------------------------------------------------------
|
| Model Class and Interface of budgets
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class Budget extends Model { 
  static table = "budgets";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    budgetAgainst: DataTypes.STRING,
    company: DataTypes.STRING,
    costCenter: DataTypes.STRING,
    project: DataTypes.STRING,
    fiscalYear: DataTypes.STRING,
    monthlyDistribution: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    controlAction: DataTypes.STRING,
    applicableOnMaterialRequest: DataTypes.STRING,
    actionIfAnnualBudgetExceededOnMr: DataTypes.STRING,
    actionIfAccumulatedMonthlyBudgetExceededOnMr: DataTypes.STRING,
    applicableOnPurchaseOrder: DataTypes.STRING,
    actionIfAnnualBudgetExceededOnPo: DataTypes.STRING,
    actionIfAccumulatedMonthlyBudgetExceededOnPo: DataTypes.STRING,
    applicableOnBookingActualExpenses: DataTypes.STRING,
    actionIfAnnualBudgetExceededOnActual: DataTypes.STRING,
    actionIfAccumulatedMonthlyBudgetExceededOnActual: DataTypes.STRING,
    budgetAccounts: DataTypes.STRING,
    
  };

}
