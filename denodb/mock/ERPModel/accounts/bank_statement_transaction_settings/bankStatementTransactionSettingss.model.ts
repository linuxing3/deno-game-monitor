// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: BankStatementTransactionSettings
|--------------------------------------------------------------------------
|
| Model of bankStatementTransactionSettingss
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class BankStatementTransactionSettings extends Model { 
  static table = "bankStatementTransactionSettingss";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    
    bankAccount: DataTypes.STRING,
    
    dateFormat: DataTypes.STRING,
    
    statementHeaderMapping: DataTypes.STRING,
    
    statementHeaders: DataTypes.STRING,
    
    transactionDataMapping: DataTypes.STRING,
    
    mappedItems: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'bankAccount',
      
        label: 'Bank Account',
      
        type: 'select',
      
        placeholder: 'Input Bank Account',
      
        options: '',
      },{
        key: 'dateFormat',
      
        label: 'Date Format',
      
        type: 'input',
      
        placeholder: 'Input Date Format',
      
        options: '',
      },{
        key: 'statementHeaderMapping',
      
        label: 'Statement Header Mapping',
      
        type: 'input',
      
        placeholder: 'Input Statement Header Mapping',
      
        options: '',
      },{
        key: 'statementHeaders',
      
        label: 'Statement Headers',
      
        type: 'select',
      
        placeholder: 'Input Statement Headers',
      
        options: '',
      },{
        key: 'transactionDataMapping',
      
        label: 'Transaction Data Mapping',
      
        type: 'input',
      
        placeholder: 'Input Transaction Data Mapping',
      
        options: '',
      },{
        key: 'mappedItems',
      
        label: 'Mapped Items',
      
        type: 'select',
      
        placeholder: 'Input Mapped Items',
      
        options: '',
      },
    ]
  };
} 
