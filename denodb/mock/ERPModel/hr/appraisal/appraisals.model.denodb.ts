// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: Appraisal
|--------------------------------------------------------------------------
|
| Model Class and Interface of appraisals
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class Appraisal extends Model { 
  static table = "appraisals";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    forEmployeeName: DataTypes.STRING,
    startDate: DataTypes.STRING,
    endDate: DataTypes.STRING,
    department: DataTypes.STRING,
    goals: DataTypes.STRING,
    totalScoreOutOf_5: DataTypes.STRING,
    remarks: DataTypes.STRING,
    company: DataTypes.STRING,
    
  };

}
