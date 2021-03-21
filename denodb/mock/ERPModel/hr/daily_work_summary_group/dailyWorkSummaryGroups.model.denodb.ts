// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: DailyWorkSummaryGroup
|--------------------------------------------------------------------------
|
| Model Class and Interface of dailyWorkSummaryGroups
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";
import {
  ModelFields,
} from "https://deno.land/x/denodb/lib/model.ts";


export class DailyWorkSummaryGroup extends Model { 
  static table = "dailyWorkSummaryGroups";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    enabled: DataTypes.STRING,
    selectUsers: DataTypes.STRING,
    users: DataTypes.STRING,
    sendEmailsAt: DataTypes.STRING,
    holidayList: DataTypes.STRING,
    reminder: DataTypes.STRING,
    subject: DataTypes.STRING,
    message: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'enabled',
        label: 'Enabled',
        type: 'input',
        placeholder: 'Input Enabled',
        options: '',
        
      },
      {
        key: 'selectUsers',
        label: 'Select Users',
        type: 'input',
        placeholder: 'Input Select Users',
        options: '',
        
      },
      {
        key: 'users',
        label: 'Users',
        type: 'select',
        placeholder: 'Input Users',
        options: '',
        
      },
      {
        key: 'sendEmailsAt',
        label: 'Send Emails At',
        type: 'select',
        placeholder: 'Input Send Emails At',
        options: '[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]',
        
      },
      {
        key: 'holidayList',
        label: 'Holiday List',
        type: 'select',
        placeholder: 'Input Holiday List',
        options: '',
        
      },
      {
        key: 'reminder',
        label: 'Reminder',
        type: 'input',
        placeholder: 'Input Reminder',
        options: '',
        
      },
      {
        key: 'subject',
        label: 'Subject',
        type: 'input',
        placeholder: 'Input Subject',
        options: '',
        
      },
      {
        key: 'message',
        label: 'Message',
        type: 'input',
        placeholder: 'Input Message',
        options: '',
        
      },
      
    ]
  };
}
