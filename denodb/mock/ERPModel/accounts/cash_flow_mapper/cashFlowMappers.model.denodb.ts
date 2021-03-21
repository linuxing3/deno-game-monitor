// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: CashFlowMapper
|--------------------------------------------------------------------------
|
| Model Class and Interface of cashFlowMappers
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";
import {
  ModelFields,
} from "https://deno.land/x/denodb/lib/model.ts";


export class CashFlowMapper extends Model { 
  static table = "cashFlowMappers";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    sectionName: DataTypes.STRING,
    sectionHeader: DataTypes.STRING,
    sectionLeader: DataTypes.STRING,
    sectionSubtotal: DataTypes.STRING,
    sectionFooter: DataTypes.STRING,
    accounts: DataTypes.STRING,
    position: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'sectionName',
        label: 'Section Name',
        type: 'input',
        placeholder: 'Input Section Name',
        options: '',
        
      },
      {
        key: 'sectionHeader',
        label: 'Section Header',
        type: 'input',
        placeholder: 'Input Section Header',
        options: '',
        
      },
      {
        key: 'sectionLeader',
        label: 'Section Leader',
        type: 'input',
        placeholder: 'Input Section Leader',
        options: '',
        
      },
      {
        key: 'sectionSubtotal',
        label: 'Section Subtotal',
        type: 'input',
        placeholder: 'Input Section Subtotal',
        options: '',
        
      },
      {
        key: 'sectionFooter',
        label: 'Section Footer',
        type: 'input',
        placeholder: 'Input Section Footer',
        options: '',
        
      },
      {
        key: 'accounts',
        label: 'Accounts',
        type: 'select',
        placeholder: 'Input Accounts',
        options: '',
        
      },
      {
        key: 'position',
        label: 'Position',
        type: 'input',
        placeholder: 'Input Position',
        options: '',
        
      },
      
    ]
  };
}
