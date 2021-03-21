// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: FiscalYear
|--------------------------------------------------------------------------
|
| Model Class and Interface of fiscalYears
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";
import {
  ModelFields,
} from "https://deno.land/x/denodb/lib/model.ts";


export class FiscalYear extends Model { 
  static table = "fiscalYears";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    yearName: DataTypes.STRING,
    disabled: DataTypes.STRING,
    yearStartDate: DataTypes.STRING,
    yearEndDate: DataTypes.STRING,
    companies: DataTypes.STRING,
    autoCreated: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'yearName',
        label: 'Year Name',
        type: 'input',
        placeholder: 'Input Year Name',
        options: '',
        
      },
      {
        key: 'disabled',
        label: 'Disabled',
        type: 'input',
        placeholder: 'Input Disabled',
        options: '',
        
      },
      {
        key: 'yearStartDate',
        label: 'Year Start Date',
        type: 'input',
        placeholder: 'Input Year Start Date',
        options: '',
        
      },
      {
        key: 'yearEndDate',
        label: 'Year End Date',
        type: 'input',
        placeholder: 'Input Year End Date',
        options: '',
        
      },
      {
        key: 'companies',
        label: 'Companies',
        type: 'select',
        placeholder: 'Input Companies',
        options: '',
        
      },
      {
        key: 'autoCreated',
        label: 'Auto Created',
        type: 'input',
        placeholder: 'Input Auto Created',
        options: '',
        
      },
      
    ]
  };
}
