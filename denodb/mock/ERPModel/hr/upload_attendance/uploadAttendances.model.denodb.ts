// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: UploadAttendance
|--------------------------------------------------------------------------
|
| Model Class and Interface of uploadAttendances
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class UploadAttendance extends Model { 
  static table = "uploadAttendances";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    downloadTemplate: DataTypes.STRING,
    attendanceFromDate: DataTypes.STRING,
    attendanceToDate: DataTypes.STRING,
    getTemplate: DataTypes.STRING,
    importAttendance: DataTypes.STRING,
    uploadHtml: DataTypes.STRING,
    importLog: DataTypes.STRING,
    
  };

}
