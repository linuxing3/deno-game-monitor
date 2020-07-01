// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PurchaseTaxesAndCharges
|--------------------------------------------------------------------------
|
| Model of purchaseTaxesAndChargess
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class PurchaseTaxesAndCharges extends Model { 
  static table = "purchaseTaxesAndChargess";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    
    considerTaxOrChargeFor: DataTypes.STRING,
    
    addOrDeduct: DataTypes.STRING,
    
    type: DataTypes.STRING,
    
    referenceRow: DataTypes.STRING,
    
    isThisTaxIncludedInBasicRate: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    accountHead: DataTypes.STRING,
    
    costCenter: DataTypes.STRING,
    
    description: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    rate: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    amount: DataTypes.STRING,
    
    taxAmountAfterDiscountAmount: DataTypes.STRING,
    
    total: DataTypes.STRING,
    
    : DataTypes.STRING,
    
    amountCompanyCurrency: DataTypes.STRING,
    
    totalCompanyCurrency: DataTypes.STRING,
    
    taxAmountAfterDiscountAmount: DataTypes.STRING,
    
    itemWiseTaxDetail: DataTypes.STRING,
    
    parenttype: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'considerTaxOrChargeFor',
      
        label: 'Consider Tax Or Charge For',
      
        type: 'select',
      
        placeholder: 'Input Consider Tax Or Charge For',
      
        options: '[object Object],[object Object]',
      },{
        key: 'addOrDeduct',
      
        label: 'Add Or Deduct',
      
        type: 'select',
      
        placeholder: 'Input Add Or Deduct',
      
        options: '[object Object]',
      },{
        key: 'type',
      
        label: 'Type',
      
        type: 'select',
      
        placeholder: 'Input Type',
      
        options: '[object Object],[object Object],[object Object],[object Object],[object Object]',
      },{
        key: 'referenceRow',
      
        label: 'Reference Row',
      
        type: 'input',
      
        placeholder: 'Input Reference Row',
      
        options: '',
      },{
        key: 'isThisTaxIncludedInBasicRate',
      
        label: 'Is This Tax Included In Basic Rate',
      
        type: 'input',
      
        placeholder: 'Input Is This Tax Included In Basic Rate',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'accountHead',
      
        label: 'Account Head',
      
        type: 'select',
      
        placeholder: 'Input Account Head',
      
        options: '',
      },{
        key: 'costCenter',
      
        label: 'Cost Center',
      
        type: 'select',
      
        placeholder: 'Input Cost Center',
      
        options: '',
      },{
        key: 'description',
      
        label: 'Description',
      
        type: 'input',
      
        placeholder: 'Input Description',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'rate',
      
        label: 'Rate',
      
        type: 'input',
      
        placeholder: 'Input Rate',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'amount',
      
        label: 'Amount',
      
        type: 'select',
      
        placeholder: 'Input Amount',
      
        options: '',
      },{
        key: 'taxAmountAfterDiscountAmount',
      
        label: 'Tax Amount After Discount Amount',
      
        type: 'select',
      
        placeholder: 'Input Tax Amount After Discount Amount',
      
        options: '',
      },{
        key: 'total',
      
        label: 'Total',
      
        type: 'select',
      
        placeholder: 'Input Total',
      
        options: '',
      },{
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      },{
        key: 'amountCompanyCurrency',
      
        label: 'Amount Company Currency',
      
        type: 'select',
      
        placeholder: 'Input Amount Company Currency',
      
        options: '',
      },{
        key: 'totalCompanyCurrency',
      
        label: 'Total Company Currency',
      
        type: 'select',
      
        placeholder: 'Input Total Company Currency',
      
        options: '',
      },{
        key: 'taxAmountAfterDiscountAmount',
      
        label: 'Tax Amount After Discount Amount',
      
        type: 'select',
      
        placeholder: 'Input Tax Amount After Discount Amount',
      
        options: '',
      },{
        key: 'itemWiseTaxDetail',
      
        label: 'Item Wise Tax Detail',
      
        type: 'input',
      
        placeholder: 'Input Item Wise Tax Detail',
      
        options: '',
      },{
        key: 'parenttype',
      
        label: 'Parenttype',
      
        type: 'input',
      
        placeholder: 'Input Parenttype',
      
        options: '',
      },
    ]
  };
} 
