// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeTaxExemptionDeclarationCategory
|--------------------------------------------------------------------------
|
| Model of employeeTaxExemptionDeclarationCategorys
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class EmployeeTaxExemptionDeclarationCategory extends Model { 
  static table = "employeeTaxExemptionDeclarationCategorys";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    exemptionSubCategory: DataTypes.STRING,
    exemptionCategory: DataTypes.STRING,
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
        type: 'select',
        placeholder: 'Input Exemption Category',
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
