// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: UploadAttendance
|--------------------------------------------------------------------------
|
| Model of uploadAttendances
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

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'downloadTemplate',
      
        label: 'Download Template',
      
        type: 'input',
      
        placeholder: 'Input Download Template',
      
        options: '',
      },{
        key: 'attendanceFromDate',
      
        label: 'Attendance From Date',
      
        type: 'input',
      
        placeholder: 'Input Attendance From Date',
      
        options: '',
      },{
        key: 'attendanceToDate',
      
        label: 'Attendance To Date',
      
        type: 'input',
      
        placeholder: 'Input Attendance To Date',
      
        options: '',
      },{
        key: 'getTemplate',
      
        label: 'Get Template',
      
        type: 'input',
      
        placeholder: 'Input Get Template',
      
        options: '',
      },{
        key: 'importAttendance',
      
        label: 'Import Attendance',
      
        type: 'input',
      
        placeholder: 'Input Import Attendance',
      
        options: '',
      },{
        key: 'uploadHtml',
      
        label: 'Upload Html',
      
        type: 'input',
      
        placeholder: 'Input Upload Html',
      
        options: '',
      },{
        key: 'importLog',
      
        label: 'Import Log',
      
        type: 'input',
      
        placeholder: 'Input Import Log',
      
        options: '',
      },
    ]
  };
} 
