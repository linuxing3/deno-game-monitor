// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PurchaseTaxesAndChargesTemplate
|--------------------------------------------------------------------------
|
| Model of purchaseTaxesAndChargesTemplates
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class PurchaseTaxesAndChargesTemplate extends Model { 
  static table = "purchaseTaxesAndChargesTemplates";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    default: DataTypes.STRING,
    disabled: DataTypes.STRING,
    company: DataTypes.STRING,
    purchaseTaxesAndCharges: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'title',
        label: 'Title',
        type: 'input',
        placeholder: 'Input Title',
        options: '',
        
      },
      {
        key: 'default',
        label: 'Default',
        type: 'input',
        placeholder: 'Input Default',
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
        key: 'purchaseTaxesAndCharges',
        label: 'Purchase Taxes And Charges',
        type: 'select',
        placeholder: 'Input Purchase Taxes And Charges',
        options: '',
        
      },
      
    ]
  };
} 
