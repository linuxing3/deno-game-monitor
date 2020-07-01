// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: Vehicle
|--------------------------------------------------------------------------
|
| Model of vehicles
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class Vehicle extends Model { 
  static table = "vehicles";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    
    licensePlate: DataTypes.STRING,
    
    make: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    model: DataTypes.STRING,
    
    details: DataTypes.STRING,
    
    odometerValueLast: DataTypes.STRING,
    
    acquisitionDate: DataTypes.STRING,
    
    location: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    chassisNo: DataTypes.STRING,
    
    vehicleValue: DataTypes.STRING,
    
    employee: DataTypes.STRING,
    
    insuranceDetails: DataTypes.STRING,
    
    insuranceCompany: DataTypes.STRING,
    
    policyNo: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    startDate: DataTypes.STRING,
    
    endDate: DataTypes.STRING,
    
    additionalDetails: DataTypes.STRING,
    
    fuelType: DataTypes.STRING,
    
    fuelUom: DataTypes.STRING,
    
    lastCarbonCheck: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    color: DataTypes.STRING,
    
    wheels: DataTypes.STRING,
    
    doors: DataTypes.STRING,
    
    amendedFrom: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'licensePlate',
      
        label: 'License Plate',
      
        type: 'input',
      
        placeholder: 'Input License Plate',
      
        options: '',
      },{
        key: 'make',
      
        label: 'Make',
      
        type: 'input',
      
        placeholder: 'Input Make',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'model',
      
        label: 'Model',
      
        type: 'input',
      
        placeholder: 'Input Model',
      
        options: '',
      },{
        key: 'details',
      
        label: 'Details',
      
        type: 'input',
      
        placeholder: 'Input Details',
      
        options: '',
      },{
        key: 'odometerValueLast',
      
        label: 'Odometer Value Last',
      
        type: 'input',
      
        placeholder: 'Input Odometer Value Last',
      
        options: '',
      },{
        key: 'acquisitionDate',
      
        label: 'Acquisition Date',
      
        type: 'input',
      
        placeholder: 'Input Acquisition Date',
      
        options: '',
      },{
        key: 'location',
      
        label: 'Location',
      
        type: 'input',
      
        placeholder: 'Input Location',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'chassisNo',
      
        label: 'Chassis No',
      
        type: 'input',
      
        placeholder: 'Input Chassis No',
      
        options: '',
      },{
        key: 'vehicleValue',
      
        label: 'Vehicle Value',
      
        type: 'input',
      
        placeholder: 'Input Vehicle Value',
      
        options: '',
      },{
        key: 'employee',
      
        label: 'Employee',
      
        type: 'select',
      
        placeholder: 'Input Employee',
      
        options: '',
      },{
        key: 'insuranceDetails',
      
        label: 'Insurance Details',
      
        type: 'input',
      
        placeholder: 'Input Insurance Details',
      
        options: '',
      },{
        key: 'insuranceCompany',
      
        label: 'Insurance Company',
      
        type: 'input',
      
        placeholder: 'Input Insurance Company',
      
        options: '',
      },{
        key: 'policyNo',
      
        label: 'Policy No',
      
        type: 'input',
      
        placeholder: 'Input Policy No',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'startDate',
      
        label: 'Start Date',
      
        type: 'input',
      
        placeholder: 'Input Start Date',
      
        options: '',
      },{
        key: 'endDate',
      
        label: 'End Date',
      
        type: 'input',
      
        placeholder: 'Input End Date',
      
        options: '',
      },{
        key: 'additionalDetails',
      
        label: 'Additional Details',
      
        type: 'input',
      
        placeholder: 'Input Additional Details',
      
        options: '',
      },{
        key: 'fuelType',
      
        label: 'Fuel Type',
      
        type: 'select',
      
        placeholder: 'Input Fuel Type',
      
        options: '[object Object],[object Object],[object Object]',
      },{
        key: 'fuelUom',
      
        label: 'Fuel Uom',
      
        type: 'select',
      
        placeholder: 'Input Fuel Uom',
      
        options: '',
      },{
        key: 'lastCarbonCheck',
      
        label: 'Last Carbon Check',
      
        type: 'input',
      
        placeholder: 'Input Last Carbon Check',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'color',
      
        label: 'Color',
      
        type: 'input',
      
        placeholder: 'Input Color',
      
        options: '',
      },{
        key: 'wheels',
      
        label: 'Wheels',
      
        type: 'input',
      
        placeholder: 'Input Wheels',
      
        options: '',
      },{
        key: 'doors',
      
        label: 'Doors',
      
        type: 'input',
      
        placeholder: 'Input Doors',
      
        options: '',
      },{
        key: 'amendedFrom',
      
        label: 'Amended From',
      
        type: 'select',
      
        placeholder: 'Input Amended From',
      
        options: '',
      },
    ]
  };
} 
