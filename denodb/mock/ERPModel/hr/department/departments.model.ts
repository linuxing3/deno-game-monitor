// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: Department
|--------------------------------------------------------------------------
|
| Model of departments
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class Department extends Model { 
  static table = "departments";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    department: DataTypes.STRING,
    parentDepartment: DataTypes.STRING,
    company: DataTypes.STRING,
    isGroup: DataTypes.STRING,
    disabled: DataTypes.STRING,
    leaveBlockList: DataTypes.STRING,
    leaveApprovers: DataTypes.STRING,
    leaveApprover: DataTypes.STRING,
    expenseApprovers: DataTypes.STRING,
    expenseApprover: DataTypes.STRING,
    lft: DataTypes.STRING,
    rgt: DataTypes.STRING,
    oldParent: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'department',
        label: 'Department',
        type: 'input',
        placeholder: 'Input Department',
        options: '',
        
      },
      {
        key: 'parentDepartment',
        label: 'Parent Department',
        type: 'select',
        placeholder: 'Input Parent Department',
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
        key: 'isGroup',
        label: 'Is Group',
        type: 'input',
        placeholder: 'Input Is Group',
        options: '',
        
      },
      {
        key: 'disabled',
        label: 'Disabled',
        type: 'input',
        placeholder: 'Input Disabled',
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
        key: 'leaveBlockList',
        label: 'Leave Block List',
        type: 'select',
        placeholder: 'Input Leave Block List',
        options: '',
        
      },
      {
        key: 'leaveApprovers',
        label: 'Leave Approvers',
        type: 'input',
        placeholder: 'Input Leave Approvers',
        options: '',
        
      },
      {
        key: 'leaveApprover',
        label: 'Leave Approver',
        type: 'select',
        placeholder: 'Input Leave Approver',
        options: '',
        
      },
      {
        key: 'expenseApprovers',
        label: 'Expense Approvers',
        type: 'input',
        placeholder: 'Input Expense Approvers',
        options: '',
        
      },
      {
        key: 'expenseApprover',
        label: 'Expense Approver',
        type: 'select',
        placeholder: 'Input Expense Approver',
        options: '',
        
      },
      {
        key: 'lft',
        label: 'Lft',
        type: 'input',
        placeholder: 'Input Lft',
        options: '',
        
      },
      {
        key: 'rgt',
        label: 'Rgt',
        type: 'input',
        placeholder: 'Input Rgt',
        options: '',
        
      },
      {
        key: 'oldParent',
        label: 'Old Parent',
        type: 'input',
        placeholder: 'Input Old Parent',
        options: '',
        
      },
      
    ]
  };
} 
