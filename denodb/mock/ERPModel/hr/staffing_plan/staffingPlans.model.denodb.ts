// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: StaffingPlan
|--------------------------------------------------------------------------
|
| Model Class and Interface of staffingPlans
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class StaffingPlan extends Model { 
  static table = "staffingPlans";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    company: DataTypes.STRING,
    department: DataTypes.STRING,
    fromDate: DataTypes.STRING,
    toDate: DataTypes.STRING,
    staffingPlanDetails: DataTypes.STRING,
    staffingPlanDetail: DataTypes.STRING,
    totalEstimatedBudget: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
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
        key: 'fromDate',
        label: 'From Date',
        type: 'input',
        placeholder: 'Input From Date',
        options: '',
        
      },
      {
        key: 'toDate',
        label: 'To Date',
        type: 'input',
        placeholder: 'Input To Date',
        options: '',
        
      },
      {
        key: 'staffingPlanDetails',
        label: 'Staffing Plan Details',
        type: 'input',
        placeholder: 'Input Staffing Plan Details',
        options: '',
        
      },
      {
        key: 'staffingPlanDetail',
        label: 'Staffing Plan Detail',
        type: 'select',
        placeholder: 'Input Staffing Plan Detail',
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
        key: 'totalEstimatedBudget',
        label: 'Total Estimated Budget',
        type: 'input',
        placeholder: 'Input Total Estimated Budget',
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
