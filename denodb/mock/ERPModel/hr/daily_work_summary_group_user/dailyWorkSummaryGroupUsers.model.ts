// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: DailyWorkSummaryGroupUser
|--------------------------------------------------------------------------
|
| Model of dailyWorkSummaryGroupUsers
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class DailyWorkSummaryGroupUser extends Model { 
  static table = "dailyWorkSummaryGroupUsers";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    user: DataTypes.STRING,
    email: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'user',
        label: 'User',
        type: 'select',
        placeholder: 'Input User',
        options: '',
        
      },
      {
        key: 'email',
        label: 'Email',
        type: 'input',
        placeholder: 'Input Email',
        options: '',
        
      },
      
    ]
  };
} 
