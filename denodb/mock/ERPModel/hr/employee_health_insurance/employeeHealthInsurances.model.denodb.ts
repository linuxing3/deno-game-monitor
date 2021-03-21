// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeHealthInsurance
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeHealthInsurances
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class EmployeeHealthInsurance extends Model { 
  static table = "employeeHealthInsurances";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    healthInsuranceName: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'healthInsuranceName',
        label: 'Health Insurance Name',
        type: 'input',
        placeholder: 'Input Health Insurance Name',
        options: '',
        
      },
      
    ]
  };
}
