// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PosSetting
|--------------------------------------------------------------------------
|
| Model Class and Interface of posSettings
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class PosSetting extends Model { 
  static table = "posSettings";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    usePosInOfflineMode: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'usePosInOfflineMode',
        label: 'Use Pos In Offline Mode',
        type: 'input',
        placeholder: 'Input Use Pos In Offline Mode',
        options: '',
        
      },
      
    ]
  };
}
