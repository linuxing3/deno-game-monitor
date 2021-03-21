// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmploymentType
|--------------------------------------------------------------------------
|
| Model Class and Interface of employmentTypes
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class EmploymentType extends Model { 
  static table = "employmentTypes";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    employmentType: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'employmentType',
        label: 'Employment Type',
        type: 'input',
        placeholder: 'Input Employment Type',
        options: '',
        
      },
      
    ]
  };
}
