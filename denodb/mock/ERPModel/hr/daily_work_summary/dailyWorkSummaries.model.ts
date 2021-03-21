// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: DailyWorkSummary
|--------------------------------------------------------------------------
|
| Model Class and Interface of dailyWorkSummaries
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


export class DailyWorkSummary extends Model { 
  static table = "dailyWorkSummaries";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    dailyWorkSummaryGroup: DataTypes.STRING,
    status: DataTypes.STRING,
    emailSentTo: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'dailyWorkSummaryGroup',
        label: 'Daily Work Summary Group',
        type: 'select',
        placeholder: 'Input Daily Work Summary Group',
        options: '',
        
      },
      {
        key: 'status',
        label: 'Status',
        type: 'select',
        placeholder: 'Input Status',
        options: '[object Object]',
        
      },
      {
        key: 'emailSentTo',
        label: 'Email Sent To',
        type: 'input',
        placeholder: 'Input Email Sent To',
        options: '',
        
      },
      
    ]
  };
}

export interface IDailyWorkSummary {
  id: FieldValue;
  dailyWorkSummaryGroup: FieldValue;
  status: FieldValue;
  emailSentTo: FieldValue;
  
}
