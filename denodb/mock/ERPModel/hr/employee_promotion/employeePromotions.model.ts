// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeePromotion
|--------------------------------------------------------------------------
|
| Model of employeePromotions
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class EmployeePromotion extends Model { 
  static table = "employeePromotions";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    employee: DataTypes.STRING,
    employeeName: DataTypes.STRING,
    department: DataTypes.STRING,
    promotionDate: DataTypes.STRING,
    company: DataTypes.STRING,
    employeePromotionDetails: DataTypes.STRING,
    employeePromotionDetail: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'employee',
        label: 'Employee',
        type: 'select',
        placeholder: 'Input Employee',
        options: '',
        
      },
      {
        key: 'employeeName',
        label: 'Employee Name',
        type: 'input',
        placeholder: 'Input Employee Name',
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
        key: 'promotionDate',
        label: 'Promotion Date',
        type: 'input',
        placeholder: 'Input Promotion Date',
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
        key: 'employeePromotionDetails',
        label: 'Employee Promotion Details',
        type: 'input',
        placeholder: 'Input Employee Promotion Details',
        options: '',
        
      },
      {
        key: 'employeePromotionDetail',
        label: 'Employee Promotion Detail',
        type: 'select',
        placeholder: 'Input Employee Promotion Detail',
        options: '',
        
      },
      {
        key: 'amendedFrom',
        label: 'Amended From',
        type: 'select',
        placeholder: 'Input Amended From',
        options: '',
        
      },
      
    ]
  };
} 
