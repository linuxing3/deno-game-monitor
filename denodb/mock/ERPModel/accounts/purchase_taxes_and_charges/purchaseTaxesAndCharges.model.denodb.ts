// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PurchaseTaxesAndCharge
|--------------------------------------------------------------------------
|
| Model Class and Interface of purchaseTaxesAndCharges
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


export class PurchaseTaxesAndCharge extends Model { 
  static table = "purchaseTaxesAndCharges";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    considerTaxOrChargeFor: DataTypes.STRING,
    addOrDeduct: DataTypes.STRING,
    type: DataTypes.STRING,
    referenceRow: DataTypes.STRING,
    isThisTaxIncludedInBasicRate: DataTypes.STRING,
    accountHead: DataTypes.STRING,
    costCenter: DataTypes.STRING,
    description: DataTypes.STRING,
    rate: DataTypes.STRING,
    amount: DataTypes.STRING,
    taxAmountAfterDiscountAmount: DataTypes.STRING,
    total: DataTypes.STRING,
    amountCompanyCurrency: DataTypes.STRING,
    totalCompanyCurrency: DataTypes.STRING,
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
        
      },
      {
        key: 'addOrDeduct',
        label: 'Add Or Deduct',
        type: 'select',
        placeholder: 'Input Add Or Deduct',
        options: '[object Object]',
        
      },
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
        key: 'description',
        label: 'Description',
        type: 'input',
        placeholder: 'Input Description',
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
        key: 'taxAmountAfterDiscountAmount',
        label: 'Tax Amount After Discount Amount',
        type: 'select',
        placeholder: 'Input Tax Amount After Discount Amount',
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

export interface IPurchaseTaxesAndCharge {
  id: FieldValue;
  considerTaxOrChargeFor: FieldValue;
  addOrDeduct: FieldValue;
  type: FieldValue;
  referenceRow: FieldValue;
  isThisTaxIncludedInBasicRate: FieldValue;
  accountHead: FieldValue;
  costCenter: FieldValue;
  description: FieldValue;
  rate: FieldValue;
  amount: FieldValue;
  taxAmountAfterDiscountAmount: FieldValue;
  total: FieldValue;
  amountCompanyCurrency: FieldValue;
  totalCompanyCurrency: FieldValue;
  itemWiseTaxDetail: FieldValue;
  parenttype: FieldValue;
  
}
