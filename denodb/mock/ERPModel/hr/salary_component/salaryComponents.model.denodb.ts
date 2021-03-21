// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: SalaryComponent
|--------------------------------------------------------------------------
|
| Model Class and Interface of salaryComponents
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class SalaryComponent extends Model { 
  static table = "salaryComponents";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    abbr: DataTypes.STRING,
    type: DataTypes.STRING,
    isAdditionalComponent: DataTypes.STRING,
    isTaxApplicable: DataTypes.STRING,
    isPayable: DataTypes.STRING,
    dependsOnLeaveWithoutPay: DataTypes.STRING,
    doNotIncludeInTotal: DataTypes.STRING,
    disabled: DataTypes.STRING,
    description: DataTypes.STRING,
    statisticalComponent: DataTypes.STRING,
    flexibleBenefits: DataTypes.STRING,
    isFlexibleBenefit: DataTypes.STRING,
    maxBenefitAmountYearly: DataTypes.STRING,
    payAgainstBenefitClaim: DataTypes.STRING,
    onlyTaxImpactCannotClaimButPartOfTaxableIncome: DataTypes.STRING,
    createSeparatePaymentEntryAgainstBenefitClaim: DataTypes.STRING,
    variableBasedOnTaxableSalary: DataTypes.STRING,
    accounts: DataTypes.STRING,
    conditionAndFormula: DataTypes.STRING,
    condition: DataTypes.STRING,
    amountBasedOnFormula: DataTypes.STRING,
    formula: DataTypes.STRING,
    amount: DataTypes.STRING,
    help: DataTypes.STRING,
    
  };

}
