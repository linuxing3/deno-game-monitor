// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: RetentionBonus
|--------------------------------------------------------------------------
|
| Model of retentionBonuss
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class RetentionBonus extends Model { 
  static table = "retentionBonuss";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    
    company: DataTypes.STRING,
    
    employee: DataTypes.STRING,
    
    bonusPaymentDate: DataTypes.STRING,
    
    bonusAmount: DataTypes.STRING,
    
    amendedFrom: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    employeeName: DataTypes.STRING,
    
    department: DataTypes.STRING,
    
    dateOfJoining: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'company',
      
        label: 'Company',
      
        type: 'select',
      
        placeholder: 'Input Company',
      
        options: '',
      },{
        key: 'employee',
      
        label: 'Employee',
      
        type: 'select',
      
        placeholder: 'Input Employee',
      
        options: '',
      },{
        key: 'bonusPaymentDate',
      
        label: 'Bonus Payment Date',
      
        type: 'input',
      
        placeholder: 'Input Bonus Payment Date',
      
        options: '',
      },{
        key: 'bonusAmount',
      
        label: 'Bonus Amount',
      
        type: 'input',
      
        placeholder: 'Input Bonus Amount',
      
        options: '',
      },{
        key: 'amendedFrom',
      
        label: 'Amended From',
      
        type: 'select',
      
        placeholder: 'Input Amended From',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'employeeName',
      
        label: 'Employee Name',
      
        type: 'input',
      
        placeholder: 'Input Employee Name',
      
        options: '',
      },{
        key: 'department',
      
        label: 'Department',
      
        type: 'select',
      
        placeholder: 'Input Department',
      
        options: '',
      },{
        key: 'dateOfJoining',
      
        label: 'Date Of Joining',
      
        type: 'input',
      
        placeholder: 'Input Date Of Joining',
      
        options: '',
      },
    ]
  };
} 
