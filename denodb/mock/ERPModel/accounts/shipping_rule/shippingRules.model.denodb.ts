// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ShippingRule
|--------------------------------------------------------------------------
|
| Model Class and Interface of shippingRules
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class ShippingRule extends Model { 
  static table = "shippingRules";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    shippingRuleLabel: DataTypes.STRING,
    disabled: DataTypes.STRING,
    shippingRuleType: DataTypes.STRING,
    accounting: DataTypes.STRING,
    company: DataTypes.STRING,
    shippingAccount: DataTypes.STRING,
    costCenter: DataTypes.STRING,
    calculateBasedOn: DataTypes.STRING,
    shippingAmount: DataTypes.STRING,
    shippingRuleConditions: DataTypes.STRING,
    restrictToCountries: DataTypes.STRING,
    validForCountries: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'shippingRuleLabel',
        label: 'Shipping Rule Label',
        type: 'input',
        placeholder: 'Input Shipping Rule Label',
        options: '',
        
      },
      {
        key: 'disabled',
        label: 'Disabled',
        type: 'input',
        placeholder: 'Input Disabled',
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
        key: 'shippingRuleType',
        label: 'Shipping Rule Type',
        type: 'select',
        placeholder: 'Input Shipping Rule Type',
        options: '[object Object]',
        
      },
      {
        key: 'accounting',
        label: 'Accounting',
        type: 'input',
        placeholder: 'Input Accounting',
        options: '',
        
      },
      {
        key: 'company',
        label: 'Company',
        type: 'select',
        placeholder: 'Input Company',
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
        key: 'shippingAccount',
        label: 'Shipping Account',
        type: 'select',
        placeholder: 'Input Shipping Account',
        options: '',
        
      },
      {
        key: 'costCenter',
        label: 'Cost Center',
        type: 'select',
        placeholder: 'Input Cost Center',
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
        key: 'calculateBasedOn',
        label: 'Calculate Based On',
        type: 'select',
        placeholder: 'Input Calculate Based On',
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
        key: 'shippingAmount',
        label: 'Shipping Amount',
        type: 'input',
        placeholder: 'Input Shipping Amount',
        options: '',
        
      },
      {
        key: 'shippingRuleConditions',
        label: 'Shipping Rule Conditions',
        type: 'input',
        placeholder: 'Input Shipping Rule Conditions',
        options: '',
        
      },
      {
        key: 'restrictToCountries',
        label: 'Restrict To Countries',
        type: 'input',
        placeholder: 'Input Restrict To Countries',
        options: '',
        
      },
      {
        key: 'validForCountries',
        label: 'Valid For Countries',
        type: 'select',
        placeholder: 'Input Valid For Countries',
        options: '',
        
      },
      
    ]
  };
}
