// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeBenefitClaim
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeBenefitClaims
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class EmployeeBenefitClaim extends Model { 
  static table = "employeeBenefitClaims";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    employee: DataTypes.STRING,
    employeeName: DataTypes.STRING,
    department: DataTypes.STRING,
    claimDate: DataTypes.STRING,
    benefitTypeAndAmount: DataTypes.STRING,
    claimBenefitFor: DataTypes.STRING,
    maxAmountEligible: DataTypes.STRING,
    payAgainstBenefitClaim: DataTypes.STRING,
    claimedAmount: DataTypes.STRING,
    salarySlip: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    expenseProof: DataTypes.STRING,
    attachments: DataTypes.STRING,
    
  };

}
