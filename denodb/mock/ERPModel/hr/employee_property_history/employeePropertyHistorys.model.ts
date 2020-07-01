// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeePropertyHistory
|--------------------------------------------------------------------------
|
| Model of employeePropertyHistorys
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class EmployeePropertyHistory extends Model { 
  static table = "employeePropertyHistorys";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    property: DataTypes.STRING,
    current: DataTypes.STRING,
    new: DataTypes.STRING,
    fieldName: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'property',
        label: 'Property',
        type: 'input',
        placeholder: 'Input Property',
        options: '',
        
      },
      {
        key: 'current',
        label: 'Current',
        type: 'input',
        placeholder: 'Input Current',
        options: '',
        
      },
      {
        key: 'new',
        label: 'New',
        type: 'input',
        placeholder: 'Input New',
        options: '',
        
      },
      {
        key: 'fieldName',
        label: 'Field Name',
        type: 'input',
        placeholder: 'Input Field Name',
        options: '',
        
      },
      
    ]
  };
} 
