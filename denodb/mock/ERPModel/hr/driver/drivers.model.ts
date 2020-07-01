// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: Driver
|--------------------------------------------------------------------------
|
| Model of drivers
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class Driver extends Model { 
  static table = "drivers";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    series: DataTypes.STRING,
    fullName: DataTypes.STRING,
    status: DataTypes.STRING,
    transporter: DataTypes.STRING,
    employee: DataTypes.STRING,
    cellphoneNumber: DataTypes.STRING,
    licenseDetails: DataTypes.STRING,
    licenseNumber: DataTypes.STRING,
    issuingDate: DataTypes.STRING,
    expiryDate: DataTypes.STRING,
    drivingLicenseCategories: DataTypes.STRING,
    drivingLicenseCategory: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        
        key: 'series',
      
        label: 'Series',
      
        type: 'select',
      
        placeholder: 'Input Series',
      
        options: '',
      
      },
      {
        
        key: 'fullName',
      
        label: 'Full Name',
      
        type: 'input',
      
        placeholder: 'Input Full Name',
      
        options: '',
      
      },
      {
        
        key: 'status',
      
        label: 'Status',
      
        type: 'select',
      
        placeholder: 'Input Status',
      
        options: '[object Object],[object Object]',
      
      },
      {
        
        key: 'transporter',
      
        label: 'Transporter',
      
        type: 'select',
      
        placeholder: 'Input Transporter',
      
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
        
        key: 'employee',
      
        label: 'Employee',
      
        type: 'select',
      
        placeholder: 'Input Employee',
      
        options: '',
      
      },
      {
        
        key: 'cellphoneNumber',
      
        label: 'Cellphone Number',
      
        type: 'input',
      
        placeholder: 'Input Cellphone Number',
      
        options: '',
      
      },
      {
        
        key: 'licenseDetails',
      
        label: 'License Details',
      
        type: 'input',
      
        placeholder: 'Input License Details',
      
        options: '',
      
      },
      {
        
        key: 'licenseNumber',
      
        label: 'License Number',
      
        type: 'input',
      
        placeholder: 'Input License Number',
      
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
        
        key: 'issuingDate',
      
        label: 'Issuing Date',
      
        type: 'input',
      
        placeholder: 'Input Issuing Date',
      
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
        
        key: 'expiryDate',
      
        label: 'Expiry Date',
      
        type: 'input',
      
        placeholder: 'Input Expiry Date',
      
        options: '',
      
      },
      {
        
        key: 'drivingLicenseCategories',
      
        label: 'Driving License Categories',
      
        type: 'input',
      
        placeholder: 'Input Driving License Categories',
      
        options: '',
      
      },
      {
        
        key: 'drivingLicenseCategory',
      
        label: 'Driving License Category',
      
        type: 'select',
      
        placeholder: 'Input Driving License Category',
      
        options: '',
      
      },
      
    ]
  };
} 
