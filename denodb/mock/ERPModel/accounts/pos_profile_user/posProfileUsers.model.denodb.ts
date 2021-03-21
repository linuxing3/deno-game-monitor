// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PosProfileUser
|--------------------------------------------------------------------------
|
| Model Class and Interface of posProfileUsers
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";
import {
  ModelFields,
} from "https://deno.land/x/denodb/lib/model.ts";


export class PosProfileUser extends Model { 
  static table = "posProfileUsers";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    default: DataTypes.STRING,
    user: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'default',
        label: 'Default',
        type: 'input',
        placeholder: 'Input Default',
        options: '',
        
      },
      {
        key: 'user',
        label: 'User',
        type: 'select',
        placeholder: 'Input User',
        options: '',
        
      },
      
    ]
  };
}
