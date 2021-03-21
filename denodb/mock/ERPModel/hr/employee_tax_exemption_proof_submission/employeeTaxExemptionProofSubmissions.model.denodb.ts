// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeTaxExemptionProofSubmission
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeTaxExemptionProofSubmissions
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class EmployeeTaxExemptionProofSubmission extends Model { 
  static table = "employeeTaxExemptionProofSubmissions";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    employee: DataTypes.STRING,
    company: DataTypes.STRING,
    payrollPeriod: DataTypes.STRING,
    department: DataTypes.STRING,
    submissionDate: DataTypes.STRING,
    totalExemptionAmount: DataTypes.STRING,
    taxExemptionProofs: DataTypes.STRING,
    attachments: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
  };

}
