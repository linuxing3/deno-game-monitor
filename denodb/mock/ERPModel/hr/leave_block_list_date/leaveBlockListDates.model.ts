// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LeaveBlockListDate
|--------------------------------------------------------------------------
|
| Model Class and Interface of leaveBlockListDates
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";
import {
  FieldValue,
} from "https://deno.land/x/denodb/lib/query-builder.ts";
import {
  ModelFields,
} from "https://deno.land/x/denodb/lib/model.ts";


export class LeaveBlockListDate extends Model { 
  static table = "leaveBlockListDates";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    blockDate: DataTypes.STRING,
    reason: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'blockDate',
        label: 'Block Date',
        type: 'input',
        placeholder: 'Input Block Date',
        options: '',
        
      },
      {
        key: 'reason',
        label: 'Reason',
        type: 'input',
        placeholder: 'Input Reason',
        options: '',
        
      },
      
    ]
  };
}

export interface ILeaveBlockListDate {
  id: FieldValue;
  blockDate: FieldValue;
  reason: FieldValue;
  
}
