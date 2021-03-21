// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LeaveBlockList
|--------------------------------------------------------------------------
|
| Model Class and Interface of leaveBlockLists
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class LeaveBlockList extends Model { 
  static table = "leaveBlockLists";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    leaveBlockListName: DataTypes.STRING,
    company: DataTypes.STRING,
    appliesToCompany: DataTypes.STRING,
    blockDays: DataTypes.STRING,
    leaveBlockListDates: DataTypes.STRING,
    allowUsers: DataTypes.STRING,
    leaveBlockListAllowed: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'leaveBlockListName',
        label: 'Leave Block List Name',
        type: 'input',
        placeholder: 'Input Leave Block List Name',
        options: '',
        
      },
      {
        key: 'company',
        label: 'Company',
        type: 'select',
        placeholder: 'Input Company',
        options: '',
        
      },
      {
        key: 'appliesToCompany',
        label: 'Applies To Company',
        type: 'input',
        placeholder: 'Input Applies To Company',
        options: '',
        
      },
      {
        key: 'blockDays',
        label: 'Block Days',
        type: 'input',
        placeholder: 'Input Block Days',
        options: '',
        
      },
      {
        key: 'leaveBlockListDates',
        label: 'Leave Block List Dates',
        type: 'select',
        placeholder: 'Input Leave Block List Dates',
        options: '',
        
      },
      {
        key: 'allowUsers',
        label: 'Allow Users',
        type: 'input',
        placeholder: 'Input Allow Users',
        options: '',
        
      },
      {
        key: 'leaveBlockListAllowed',
        label: 'Leave Block List Allowed',
        type: 'select',
        placeholder: 'Input Leave Block List Allowed',
        options: '',
        
      },
      
    ]
  };
}
