// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: SalesTaxesAndCharge
|--------------------------------------------------------------------------
|
| Model Class and Interface of salesTaxesAndCharges
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class SalesTaxesAndCharge extends Model { 
  static table = "salesTaxesAndCharges";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    type: DataTypes.STRING,
    referenceRow: DataTypes.STRING,
    accountHead: DataTypes.STRING,
    costCenter: DataTypes.STRING,
    description: DataTypes.STRING,
    isThisTaxIncludedInBasicRate: DataTypes.STRING,
    rate: DataTypes.STRING,
    amount: DataTypes.STRING,
    total: DataTypes.STRING,
    taxAmountAfterDiscountAmount: DataTypes.STRING,
    amountCompanyCurrency: DataTypes.STRING,
    totalCompanyCurrency: DataTypes.STRING,
    taxAmountAfterDiscountAmountCompanyCurrency: DataTypes.STRING,
    itemWiseTaxDetail: DataTypes.STRING,
    parenttype: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'type',
        label: 'Type',
        type: 'select',
        placeholder: 'Input Type',
        options: '[object Object],[object Object],[object Object],[object Object],[object Object]',
        
      },
      {
        key: 'referenceRow',
        label: 'Reference Row',
        type: 'input',
        placeholder: 'Input Reference Row',
        options: '',
        
      },
      {
        key: 'accountHead',
        label: 'Account Head',
        type: 'select',
        placeholder: 'Input Account Head',
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
        key: 'description',
        label: 'Description',
        type: 'input',
        placeholder: 'Input Description',
        options: '',
        
      },
      {
        key: 'isThisTaxIncludedInBasicRate',
        label: 'Is This Tax Included In Basic Rate',
        type: 'input',
        placeholder: 'Input Is This Tax Included In Basic Rate',
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
        key: 'rate',
        label: 'Rate',
        type: 'input',
        placeholder: 'Input Rate',
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
        key: 'amount',
        label: 'Amount',
        type: 'select',
        placeholder: 'Input Amount',
        options: '',
        
      },
      {
        key: 'total',
        label: 'Total',
        type: 'select',
        placeholder: 'Input Total',
        options: '',
        
      },
      {
        key: 'taxAmountAfterDiscountAmount',
        label: 'Tax Amount After Discount Amount',
        type: 'select',
        placeholder: 'Input Tax Amount After Discount Amount',
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
        key: 'amountCompanyCurrency',
        label: 'Amount Company Currency',
        type: 'select',
        placeholder: 'Input Amount Company Currency',
        options: '',
        
      },
      {
        key: 'totalCompanyCurrency',
        label: 'Total Company Currency',
        type: 'select',
        placeholder: 'Input Total Company Currency',
        options: '',
        
      },
      {
        key: 'taxAmountAfterDiscountAmountCompanyCurrency',
        label: 'Tax Amount After Discount Amount Company Currency',
        type: 'select',
        placeholder: 'Input Tax Amount After Discount Amount Company Currency',
        options: '',
        
      },
      {
        key: 'itemWiseTaxDetail',
        label: 'Item Wise Tax Detail',
        type: 'input',
        placeholder: 'Input Item Wise Tax Detail',
        options: '',
        
      },
      {
        key: 'parenttype',
        label: 'Parenttype',
        type: 'input',
        placeholder: 'Input Parenttype',
        options: '',
        
      },
      
    ]
  };
}
