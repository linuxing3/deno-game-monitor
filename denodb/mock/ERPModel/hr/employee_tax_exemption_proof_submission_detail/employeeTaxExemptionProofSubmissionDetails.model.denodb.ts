// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeTaxExemptionProofSubmissionDetail
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeTaxExemptionProofSubmissionDetails
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class EmployeeTaxExemptionProofSubmissionDetail extends Model { 
  static table = "employeeTaxExemptionProofSubmissionDetails";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    exemptionSubCategory: DataTypes.STRING,
    exemptionCategory: DataTypes.STRING,
    typeOfProof: DataTypes.STRING,
    amount: DataTypes.STRING,
    
  };

}
