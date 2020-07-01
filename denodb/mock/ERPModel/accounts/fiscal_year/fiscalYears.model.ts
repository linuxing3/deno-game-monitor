// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: FiscalYear
|--------------------------------------------------------------------------
|
| Model of fiscalYears
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class FiscalYear extends Model { 
  static table = "fiscalYears";
  static timestamps = true;
  
  static fields = {
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
