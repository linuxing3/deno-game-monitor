// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: LeaveType
|--------------------------------------------------------------------------
|
| Model of leaveTypes
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class LeaveType extends Model { 
  static table = "leaveTypes";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    leaveTypeName: DataTypes.STRING,
    maxLeavesAllowed: DataTypes.STRING,
    applicableAfterWorkingDays: DataTypes.STRING,
    maximumContinuousDaysApplicable: DataTypes.STRING,
    isCarryForward: DataTypes.STRING,
    isLeaveWithoutPay: DataTypes.STRING,
    isOptionalLeave: DataTypes.STRING,
    allowNegativeBalance: DataTypes.STRING,
    includeHolidaysWithinLeavesAsLeaves: DataTypes.STRING,
    isCompensatory: DataTypes.STRING,
    encashment: DataTypes.STRING,
    allowEncashment: DataTypes.STRING,
    encashmentThresholdDays: DataTypes.STRING,
    earningComponent: DataTypes.STRING,
    earnedLeave: DataTypes.STRING,
    isEarnedLeave: DataTypes.STRING,
    earnedLeaveFrequency: DataTypes.STRING,
    rounding: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        
        key: 'leaveTypeName',
      
        label: 'Leave Type Name',
      
        type: 'input',
      
        placeholder: 'Input Leave Type Name',
      
        options: '',
      
      },
      {
        
        key: 'maxLeavesAllowed',
      
        label: 'Max Leaves Allowed',
      
        type: 'input',
      
        placeholder: 'Input Max Leaves Allowed',
      
        options: '',
      
      },
      {
        
        key: 'applicableAfterWorkingDays',
      
        label: 'Applicable After Working Days',
      
        type: 'input',
      
        placeholder: 'Input Applicable After Working Days',
      
        options: '',
      
      },
      {
        
        key: 'maximumContinuousDaysApplicable',
      
        label: 'Maximum Continuous Days Applicable',
      
        type: 'input',
      
        placeholder: 'Input Maximum Continuous Days Applicable',
      
        options: '',
      
      },
      {
        
        key: 'isCarryForward',
      
        label: 'Is Carry Forward',
      
        type: 'input',
      
        placeholder: 'Input Is Carry Forward',
      
        options: '',
      
      },
      {
        
        key: 'isLeaveWithoutPay',
      
        label: 'Is Leave Without Pay',
      
        type: 'input',
      
        placeholder: 'Input Is Leave Without Pay',
      
        options: '',
      
      },
      {
        
        key: 'isOptionalLeave',
      
        label: 'Is Optional Leave',
      
        type: 'input',
      
        placeholder: 'Input Is Optional Leave',
      
        options: '',
      
      },
      {
        
        key: 'allowNegativeBalance',
      
        label: 'Allow Negative Balance',
      
        type: 'input',
      
        placeholder: 'Input Allow Negative Balance',
      
        options: '',
      
      },
      {
        
        key: 'includeHolidaysWithinLeavesAsLeaves',
      
        label: 'Include Holidays Within Leaves As Leaves',
      
        type: 'input',
      
        placeholder: 'Input Include Holidays Within Leaves As Leaves',
      
        options: '',
      
      },
      {
        
        key: 'isCompensatory',
      
        label: 'Is Compensatory',
      
        type: 'input',
      
        placeholder: 'Input Is Compensatory',
      
        options: '',
      
      },
      {
        
        key: 'encashment',
      
        label: 'Encashment',
      
        type: 'input',
      
        placeholder: 'Input Encashment',
      
        options: '',
      
      },
      {
        
        key: 'allowEncashment',
      
        label: 'Allow Encashment',
      
        type: 'input',
      
        placeholder: 'Input Allow Encashment',
      
        options: '',
      
      },
      {
        
        key: 'encashmentThresholdDays',
      
        label: 'Encashment Threshold Days',
      
        type: 'input',
      
        placeholder: 'Input Encashment Threshold Days',
      
        options: '',
      
      },
      {
        
        key: 'earningComponent',
      
        label: 'Earning Component',
      
        type: 'select',
      
        placeholder: 'Input Earning Component',
      
        options: '',
      
      },
      {
        
        key: 'earnedLeave',
      
        label: 'Earned Leave',
      
        type: 'input',
      
        placeholder: 'Input Earned Leave',
      
        options: '',
      
      },
      {
        
        key: 'isEarnedLeave',
      
        label: 'Is Earned Leave',
      
        type: 'input',
      
        placeholder: 'Input Is Earned Leave',
      
        options: '',
      
      },
      {
        
        key: 'earnedLeaveFrequency',
      
        label: 'Earned Leave Frequency',
      
        type: 'select',
      
        placeholder: 'Input Earned Leave Frequency',
      
        options: '[object Object],[object Object]',
      
      },
      {
        
        key: 'rounding',
      
        label: 'Rounding',
      
        type: 'select',
      
        placeholder: 'Input Rounding',
      
        options: '[object Object]',
      
      },
      
    ]
  };
} 
