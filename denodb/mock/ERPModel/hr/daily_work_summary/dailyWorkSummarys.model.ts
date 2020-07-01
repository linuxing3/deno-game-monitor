// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: DailyWorkSummary
|--------------------------------------------------------------------------
|
| Model of dailyWorkSummarys
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class DailyWorkSummary extends Model { 
  static table = "dailyWorkSummarys";
  static timestamps = true;
  
  static fields = {
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
