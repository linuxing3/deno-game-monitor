// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ShiftType
|--------------------------------------------------------------------------
|
| Model Class and Interface of shiftTypes
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


export class ShiftType extends Model { 
  static table = "shiftTypes";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    startTime: DataTypes.STRING,
    endTime: DataTypes.STRING,
    holidayList: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'startTime',
        label: 'Start Time',
        type: 'input',
        placeholder: 'Input Start Time',
        options: '',
        
      },
      {
        key: 'endTime',
        label: 'End Time',
        type: 'input',
        placeholder: 'Input End Time',
        options: '',
        
      },
      {
        key: 'holidayList',
        label: 'Holiday List',
        type: 'select',
        placeholder: 'Input Holiday List',
        options: '',
        
      },
      
    ]
  };
}

export interface IShiftType {
  id: FieldValue;
  startTime: FieldValue;
  endTime: FieldValue;
  holidayList: FieldValue;
  
}
