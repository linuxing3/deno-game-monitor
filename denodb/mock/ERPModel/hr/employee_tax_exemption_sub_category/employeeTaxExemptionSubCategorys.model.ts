// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeTaxExemptionSubCategory
|--------------------------------------------------------------------------
|
| Model of employeeTaxExemptionSubCategorys
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class EmployeeTaxExemptionSubCategory extends Model { 
  static table = "employeeTaxExemptionSubCategorys";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    taxExemptionCategory: DataTypes.STRING,
    maxAmount: DataTypes.STRING,
    isActive: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'taxExemptionCategory',
        label: 'Tax Exemption Category',
        type: 'select',
        placeholder: 'Input Tax Exemption Category',
        options: '',
        
      },
      {
        key: 'maxAmount',
        label: 'Max Amount',
        type: 'input',
        placeholder: 'Input Max Amount',
        options: '',
        
      },
      {
        key: 'isActive',
        label: 'Is Active',
        type: 'input',
        placeholder: 'Input Is Active',
        options: '',
        
      },
      
    ]
  };
} 
