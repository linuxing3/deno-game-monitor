// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LeaveBlockListAllow
|--------------------------------------------------------------------------
|
| Model of leaveBlockListAllows
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class LeaveBlockListAllow extends Model { 
  static table = "leaveBlockListAllows";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    
    allowUser: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'allowUser',
      
        label: 'Allow User',
      
        type: 'select',
      
        placeholder: 'Input Allow User',
      
        options: '',
      },
    ]
  };
} 
