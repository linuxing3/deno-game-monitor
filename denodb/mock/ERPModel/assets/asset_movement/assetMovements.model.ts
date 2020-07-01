// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: AssetMovement
|--------------------------------------------------------------------------
|
| Model of assetMovements
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class AssetMovement extends Model { 
  static table = "assetMovements";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    
    company: DataTypes.STRING,
    
    purpose: DataTypes.STRING,
    
    asset: DataTypes.STRING,
    
    transactionDate: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    quantity: DataTypes.STRING,
    
    selectSerialNo: DataTypes.STRING,
    
    serialNo: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    sourceLocation: DataTypes.STRING,
    
    targetLocation: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    fromEmployee: DataTypes.STRING,
    
    toEmployee: DataTypes.STRING,
    
    reference: DataTypes.STRING,
    
    referenceDocType: DataTypes.STRING,
    
    referenceName: DataTypes.STRING,
    
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
      },{
        key: 'purpose',
      
        label: 'Purpose',
      
        type: 'select',
      
        placeholder: 'Input Purpose',
      
        options: '[object Object],[object Object],[object Object]',
      },{
        key: 'asset',
      
        label: 'Asset',
      
        type: 'select',
      
        placeholder: 'Input Asset',
      
        options: '',
      },{
        key: 'transactionDate',
      
        label: 'Transaction Date',
      
        type: 'input',
      
        placeholder: 'Input Transaction Date',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'quantity',
      
        label: 'Quantity',
      
        type: 'input',
      
        placeholder: 'Input Quantity',
      
        options: '',
      },{
        key: 'selectSerialNo',
      
        label: 'Select Serial No',
      
        type: 'select',
      
        placeholder: 'Input Select Serial No',
      
        options: '',
      },{
        key: 'serialNo',
      
        label: 'Serial No',
      
        type: 'input',
      
        placeholder: 'Input Serial No',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'sourceLocation',
      
        label: 'Source Location',
      
        type: 'select',
      
        placeholder: 'Input Source Location',
      
        options: '',
      },{
        key: 'targetLocation',
      
        label: 'Target Location',
      
        type: 'select',
      
        placeholder: 'Input Target Location',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'fromEmployee',
      
        label: 'From Employee',
      
        type: 'select',
      
        placeholder: 'Input From Employee',
      
        options: '',
      },{
        key: 'toEmployee',
      
        label: 'To Employee',
      
        type: 'select',
      
        placeholder: 'Input To Employee',
      
        options: '',
      },{
        key: 'reference',
      
        label: 'Reference',
      
        type: 'input',
      
        placeholder: 'Input Reference',
      
        options: '',
      },{
        key: 'referenceDocType',
      
        label: 'Reference Doc Type',
      
        type: 'select',
      
        placeholder: 'Input Reference Doc Type',
      
        options: '',
      },{
        key: 'referenceName',
      
        label: 'Reference Name',
      
        type: 'select',
      
        placeholder: 'Input Reference Name',
      
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
