// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: VehicleService
|--------------------------------------------------------------------------
|
| Model Class and Interface of vehicleServices
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class VehicleService extends Model { 
  static table = "vehicleServices";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    serviceItem: DataTypes.STRING,
    type: DataTypes.STRING,
    frequency: DataTypes.STRING,
    expense: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'serviceItem',
        label: 'Service Item',
        type: 'select',
        placeholder: 'Input Service Item',
        options: '[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]',
        
      },
      {
        key: 'type',
        label: 'Type',
        type: 'select',
        placeholder: 'Input Type',
        options: '[object Object],[object Object],[object Object]',
        
      },
      {
        key: 'frequency',
        label: 'Frequency',
        type: 'select',
        placeholder: 'Input Frequency',
        options: '[object Object],[object Object],[object Object],[object Object],[object Object]',
        
      },
      {
        key: 'expense',
        label: 'Expense',
        type: 'input',
        placeholder: 'Input Expense',
        options: '',
        
      },
      
    ]
  };
}
