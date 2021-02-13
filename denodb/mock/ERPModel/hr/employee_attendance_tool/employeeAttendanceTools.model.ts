// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeAttendanceTool
|--------------------------------------------------------------------------
|
| Model Class and Interface of employeeAttendanceTools
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";
import {
  FieldValue,
} from "https://deno.land/x/denodb/lib/query-builder.ts";
import {
  ModelFields,
} from "https://deno.land/x/denodb/lib/model.ts";


export class EmployeeAttendanceTool extends Model { 
  static table = "employeeAttendanceTools";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    date: DataTypes.STRING,
    department: DataTypes.STRING,
    branch: DataTypes.STRING,
    company: DataTypes.STRING,
    unmarkedAttendance: DataTypes.STRING,
    employeesHtml: DataTypes.STRING,
    markedAttendance: DataTypes.STRING,
    markedAttendanceHtml: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'date',
        label: 'Date',
        type: 'input',
        placeholder: 'Input Date',
        options: '',
        
      },
      {
        key: 'department',
        label: 'Department',
        type: 'select',
        placeholder: 'Input Department',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'branch',
        label: 'Branch',
        type: 'select',
        placeholder: 'Input Branch',
        options: '',
        
      },
      {
        key: 'company',
        label: 'Company',
        type: 'select',
        placeholder: 'Input Company',
        options: '',
        
      },
      {
        key: 'unmarkedAttendance',
        label: 'Unmarked Attendance',
        type: 'input',
        placeholder: 'Input Unmarked Attendance',
        options: '',
        
      },
      {
        key: 'employeesHtml',
        label: 'Employees Html',
        type: 'input',
        placeholder: 'Input Employees Html',
        options: '',
        
      },
      {
        key: 'markedAttendance',
        label: 'Marked Attendance',
        type: 'input',
        placeholder: 'Input Marked Attendance',
        options: '',
        
      },
      {
        key: 'markedAttendanceHtml',
        label: 'Marked Attendance Html',
        type: 'input',
        placeholder: 'Input Marked Attendance Html',
        options: '',
        
      },
      
    ]
  };
}

export interface IEmployeeAttendanceTool {
  id: FieldValue;
  date: FieldValue;
  department: FieldValue;
  branch: FieldValue;
  company: FieldValue;
  unmarkedAttendance: FieldValue;
  employeesHtml: FieldValue;
  markedAttendance: FieldValue;
  markedAttendanceHtml: FieldValue;
  
}
