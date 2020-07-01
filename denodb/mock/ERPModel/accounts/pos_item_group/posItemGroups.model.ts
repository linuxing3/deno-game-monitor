// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PosItemGroup
|--------------------------------------------------------------------------
|
| Model of posItemGroups
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class PosItemGroup extends Model { 
  static table = "posItemGroups";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    itemGroup: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'itemGroup',
        label: 'Item Group',
        type: 'select',
        placeholder: 'Input Item Group',
        options: '',
        
      },
      
    ]
  };
} 
