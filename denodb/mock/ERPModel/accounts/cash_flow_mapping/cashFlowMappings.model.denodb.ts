// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: CashFlowMapping
|--------------------------------------------------------------------------
|
| Model Class and Interface of cashFlowMappings
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class CashFlowMapping extends Model { 
  static table = "cashFlowMappings";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    label: DataTypes.STRING,
    accounts: DataTypes.STRING,
    selectMaximumOf_1: DataTypes.STRING,
    isFinanceCost: DataTypes.STRING,
    isWorkingCapital: DataTypes.STRING,
    isFinanceCostAdjustment: DataTypes.STRING,
    isIncomeTaxLiability: DataTypes.STRING,
    isIncomeTaxExpense: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'name',
        label: 'Name',
        type: 'input',
        placeholder: 'Input Name',
        options: '',
        
      },
      {
        key: 'label',
        label: 'Label',
        type: 'input',
        placeholder: 'Input Label',
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
        key: 'selectMaximumOf_1',
        label: 'Select Maximum Of 1',
        type: 'input',
        placeholder: 'Input Select Maximum Of 1',
        options: '',
        
      },
      {
        key: 'isFinanceCost',
        label: 'Is Finance Cost',
        type: 'input',
        placeholder: 'Input Is Finance Cost',
        options: '',
        
      },
      {
        key: 'isWorkingCapital',
        label: 'Is Working Capital',
        type: 'input',
        placeholder: 'Input Is Working Capital',
        options: '',
        
      },
      {
        key: 'isFinanceCostAdjustment',
        label: 'Is Finance Cost Adjustment',
        type: 'input',
        placeholder: 'Input Is Finance Cost Adjustment',
        options: '',
        
      },
      {
        key: 'isIncomeTaxLiability',
        label: 'Is Income Tax Liability',
        type: 'input',
        placeholder: 'Input Is Income Tax Liability',
        options: '',
        
      },
      {
        key: 'isIncomeTaxExpense',
        label: 'Is Income Tax Expense',
        type: 'input',
        placeholder: 'Input Is Income Tax Expense',
        options: '',
        
      },
      
    ]
  };
}
