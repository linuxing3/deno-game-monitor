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
import {
  ModelFields,
} from "https://deno.land/x/denodb/lib/model.ts";


export class EmployeeTaxExemptionProofSubmissionDetail extends Model { 
  static table = "employeeTaxExemptionProofSubmissionDetails";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    exemptionSubCategory: DataTypes.STRING,
    exemptionCategory: DataTypes.STRING,
    typeOfProof: DataTypes.STRING,
    amount: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'exemptionSubCategory',
        label: 'Exemption Sub Category',
        type: 'select',
        placeholder: 'Input Exemption Sub Category',
        options: '',
        
      },
      {
        key: 'exemptionCategory',
        label: 'Exemption Category',
        type: 'input',
        placeholder: 'Input Exemption Category',
        options: '',
        
      },
      {
        key: 'typeOfProof',
        label: 'Type Of Proof',
        type: 'input',
        placeholder: 'Input Type Of Proof',
        options: '',
        
      },
      {
        key: 'amount',
        label: 'Amount',
        type: 'input',
        placeholder: 'Input Amount',
        options: '',
        
      },
      
    ]
  };
}
