// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: VehicleLog
|--------------------------------------------------------------------------
|
| Model Class and Interface of vehicleLogs
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


export class VehicleLog extends Model { 
  static table = "vehicleLogs";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    series: DataTypes.STRING,
    licensePlate: DataTypes.STRING,
    employee: DataTypes.STRING,
    model: DataTypes.STRING,
    make: DataTypes.STRING,
    odometerReading: DataTypes.STRING,
    date: DataTypes.STRING,
    odometer: DataTypes.STRING,
    refuellingDetails: DataTypes.STRING,
    fuelQty: DataTypes.STRING,
    fuelPrice: DataTypes.STRING,
    supplier: DataTypes.STRING,
    invoiceRef: DataTypes.STRING,
    serviceDetails: DataTypes.STRING,
    serviceDetail: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: '',
        label: '',
        type: 'select',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'series',
        label: 'Series',
        type: 'select',
        placeholder: 'Input Series',
        options: '',
        
      },
      {
        key: 'licensePlate',
        label: 'License Plate',
        type: 'select',
        placeholder: 'Input License Plate',
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
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
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
        key: 'model',
        label: 'Model',
        type: 'input',
        placeholder: 'Input Model',
        options: '',
        
      },
      {
        key: 'make',
        label: 'Make',
        type: 'input',
        placeholder: 'Input Make',
        options: '',
        
      },
      {
        key: 'odometerReading',
        label: 'Odometer Reading',
        type: 'input',
        placeholder: 'Input Odometer Reading',
        options: '',
        
      },
      {
        key: 'date',
        label: 'Date',
        type: 'input',
        placeholder: 'Input Date',
        options: '',
        
      },
      {
        key: 'odometer',
        label: 'Odometer',
        type: 'input',
        placeholder: 'Input Odometer',
        options: '',
        
      },
      {
        key: 'refuellingDetails',
        label: 'Refuelling Details',
        type: 'input',
        placeholder: 'Input Refuelling Details',
        options: '',
        
      },
      {
        key: 'fuelQty',
        label: 'Fuel Qty',
        type: 'input',
        placeholder: 'Input Fuel Qty',
        options: '',
        
      },
      {
        key: 'fuelPrice',
        label: 'Fuel Price',
        type: 'input',
        placeholder: 'Input Fuel Price',
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
        key: 'supplier',
        label: 'Supplier',
        type: 'select',
        placeholder: 'Input Supplier',
        options: '',
        
      },
      {
        key: 'invoiceRef',
        label: 'Invoice Ref',
        type: 'input',
        placeholder: 'Input Invoice Ref',
        options: '',
        
      },
      {
        key: 'serviceDetails',
        label: 'Service Details',
        type: 'input',
        placeholder: 'Input Service Details',
        options: '',
        
      },
      {
        key: 'serviceDetail',
        label: 'Service Detail',
        type: 'select',
        placeholder: 'Input Service Detail',
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

export interface IVehicleLog {
  id: FieldValue;
  series: FieldValue;
  licensePlate: FieldValue;
  employee: FieldValue;
  model: FieldValue;
  make: FieldValue;
  odometerReading: FieldValue;
  date: FieldValue;
  odometer: FieldValue;
  refuellingDetails: FieldValue;
  fuelQty: FieldValue;
  fuelPrice: FieldValue;
  supplier: FieldValue;
  invoiceRef: FieldValue;
  serviceDetails: FieldValue;
  serviceDetail: FieldValue;
  amendedFrom: FieldValue;
  
}
