// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: TestRecords
|--------------------------------------------------------------------------
|
| Model of testRecordss
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class TestRecords extends Model { 
  static table = "testRecordss";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      
    ]
  };
} 
