// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: AssetRepair
|--------------------------------------------------------------------------
|
| Model Class and Interface of assetRepairs
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


export class AssetRepair extends Model { 
  static table = "assetRepairs";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    assetName: DataTypes.STRING,
    series: DataTypes.STRING,
    itemCode: DataTypes.STRING,
    itemName: DataTypes.STRING,
    failureDate: DataTypes.STRING,
    assignTo: DataTypes.STRING,
    assignToName: DataTypes.STRING,
    completionDate: DataTypes.STRING,
    repairStatus: DataTypes.STRING,
    errorDescription: DataTypes.STRING,
    actionsPerformed: DataTypes.STRING,
    downtime: DataTypes.STRING,
    repairCost: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'assetName',
        label: 'Asset Name',
        type: 'select',
        placeholder: 'Input Asset Name',
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
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'itemCode',
        label: 'Item Code',
        type: 'input',
        placeholder: 'Input Item Code',
        options: '',
        
      },
      {
        key: 'itemName',
        label: 'Item Name',
        type: 'input',
        placeholder: 'Input Item Name',
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
        key: 'failureDate',
        label: 'Failure Date',
        type: 'input',
        placeholder: 'Input Failure Date',
        options: '',
        
      },
      {
        key: 'assignTo',
        label: 'Assign To',
        type: 'select',
        placeholder: 'Input Assign To',
        options: '',
        
      },
      {
        key: 'assignToName',
        label: 'Assign To Name',
        type: 'input',
        placeholder: 'Input Assign To Name',
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
        key: 'completionDate',
        label: 'Completion Date',
        type: 'input',
        placeholder: 'Input Completion Date',
        options: '',
        
      },
      {
        key: 'repairStatus',
        label: 'Repair Status',
        type: 'select',
        placeholder: 'Input Repair Status',
        options: '[object Object],[object Object]',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'errorDescription',
        label: 'Error Description',
        type: 'input',
        placeholder: 'Input Error Description',
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
        key: 'actionsPerformed',
        label: 'Actions Performed',
        type: 'input',
        placeholder: 'Input Actions Performed',
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
        key: 'downtime',
        label: 'Downtime',
        type: 'input',
        placeholder: 'Input Downtime',
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
        key: 'repairCost',
        label: 'Repair Cost',
        type: 'input',
        placeholder: 'Input Repair Cost',
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

export interface IAssetRepair {
  id: FieldValue;
  assetName: FieldValue;
  series: FieldValue;
  itemCode: FieldValue;
  itemName: FieldValue;
  failureDate: FieldValue;
  assignTo: FieldValue;
  assignToName: FieldValue;
  completionDate: FieldValue;
  repairStatus: FieldValue;
  errorDescription: FieldValue;
  actionsPerformed: FieldValue;
  downtime: FieldValue;
  repairCost: FieldValue;
  amendedFrom: FieldValue;
  
}
