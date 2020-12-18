// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PricingRule
|--------------------------------------------------------------------------
|
| Model Class and Interface of pricingRules
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


export class PricingRule extends Model { 
  static table = "pricingRules";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    applyOn: DataTypes.STRING,
    itemCode: DataTypes.STRING,
    brand: DataTypes.STRING,
    itemGroup: DataTypes.STRING,
    priority: DataTypes.STRING,
    disable: DataTypes.STRING,
    selling: DataTypes.STRING,
    buying: DataTypes.STRING,
    applicableFor: DataTypes.STRING,
    customer: DataTypes.STRING,
    customerGroup: DataTypes.STRING,
    territory: DataTypes.STRING,
    salesPartner: DataTypes.STRING,
    campaign: DataTypes.STRING,
    supplier: DataTypes.STRING,
    supplierGroup: DataTypes.STRING,
    minQty: DataTypes.STRING,
    maxQty: DataTypes.STRING,
    validFrom: DataTypes.STRING,
    validUpto: DataTypes.STRING,
    company: DataTypes.STRING,
    currency: DataTypes.STRING,
    margin: DataTypes.STRING,
    marginType: DataTypes.STRING,
    marginRateOrAmount: DataTypes.STRING,
    rateOrDiscount: DataTypes.STRING,
    rate: DataTypes.STRING,
    discountOnPriceListRate: DataTypes.STRING,
    forPriceList: DataTypes.STRING,
    pricingRuleHelp: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'title',
        label: 'Title',
        type: 'input',
        placeholder: 'Input Title',
        options: '',
        
      },
      {
        key: 'applyOn',
        label: 'Apply On',
        type: 'select',
        placeholder: 'Input Apply On',
        options: '[object Object],[object Object],[object Object]',
        
      },
      {
        key: 'itemCode',
        label: 'Item Code',
        type: 'select',
        placeholder: 'Input Item Code',
        options: '',
        
      },
      {
        key: 'brand',
        label: 'Brand',
        type: 'select',
        placeholder: 'Input Brand',
        options: '',
        
      },
      {
        key: 'itemGroup',
        label: 'Item Group',
        type: 'select',
        placeholder: 'Input Item Group',
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
        key: 'priority',
        label: 'Priority',
        type: 'select',
        placeholder: 'Input Priority',
        options: '[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]',
        
      },
      {
        key: 'disable',
        label: 'Disable',
        type: 'input',
        placeholder: 'Input Disable',
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
        key: 'selling',
        label: 'Selling',
        type: 'input',
        placeholder: 'Input Selling',
        options: '',
        
      },
      {
        key: 'buying',
        label: 'Buying',
        type: 'input',
        placeholder: 'Input Buying',
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
        key: 'applicableFor',
        label: 'Applicable For',
        type: 'select',
        placeholder: 'Input Applicable For',
        options: '[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]',
        
      },
      {
        key: 'customer',
        label: 'Customer',
        type: 'select',
        placeholder: 'Input Customer',
        options: '',
        
      },
      {
        key: 'customerGroup',
        label: 'Customer Group',
        type: 'select',
        placeholder: 'Input Customer Group',
        options: '',
        
      },
      {
        key: 'territory',
        label: 'Territory',
        type: 'select',
        placeholder: 'Input Territory',
        options: '',
        
      },
      {
        key: 'salesPartner',
        label: 'Sales Partner',
        type: 'select',
        placeholder: 'Input Sales Partner',
        options: '',
        
      },
      {
        key: 'campaign',
        label: 'Campaign',
        type: 'select',
        placeholder: 'Input Campaign',
        options: '',
        
      },
      {
        key: 'supplier',
        label: 'Supplier',
        type: 'select',
        placeholder: 'Input Supplier',
        options: '',
        
      },
      {
        key: 'supplierGroup',
        label: 'Supplier Group',
        type: 'select',
        placeholder: 'Input Supplier Group',
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
        key: 'minQty',
        label: 'Min Qty',
        type: 'input',
        placeholder: 'Input Min Qty',
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
        key: 'maxQty',
        label: 'Max Qty',
        type: 'input',
        placeholder: 'Input Max Qty',
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
        key: 'validFrom',
        label: 'Valid From',
        type: 'input',
        placeholder: 'Input Valid From',
        options: '',
        
      },
      {
        key: 'validUpto',
        label: 'Valid Upto',
        type: 'input',
        placeholder: 'Input Valid Upto',
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
        key: 'currency',
        label: 'Currency',
        type: 'select',
        placeholder: 'Input Currency',
        options: '',
        
      },
      {
        key: 'margin',
        label: 'Margin',
        type: 'input',
        placeholder: 'Input Margin',
        options: '',
        
      },
      {
        key: 'marginType',
        label: 'Margin Type',
        type: 'select',
        placeholder: 'Input Margin Type',
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
        key: 'marginRateOrAmount',
        label: 'Margin Rate Or Amount',
        type: 'input',
        placeholder: 'Input Margin Rate Or Amount',
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
        key: 'rateOrDiscount',
        label: 'Rate Or Discount',
        type: 'select',
        placeholder: 'Input Rate Or Discount',
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
        key: 'rate',
        label: 'Rate',
        type: 'input',
        placeholder: 'Input Rate',
        options: '',
        
      },
      {
        key: 'discountOnPriceListRate',
        label: 'Discount On Price List Rate',
        type: 'input',
        placeholder: 'Input Discount On Price List Rate',
        options: '',
        
      },
      {
        key: 'forPriceList',
        label: 'For Price List',
        type: 'select',
        placeholder: 'Input For Price List',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'select',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'pricingRuleHelp',
        label: 'Pricing Rule Help',
        type: 'input',
        placeholder: 'Input Pricing Rule Help',
        options: '',
        
      },
      
    ]
  };
}

export interface IPricingRule {
  id: FieldValue;
  title: FieldValue;
  applyOn: FieldValue;
  itemCode: FieldValue;
  brand: FieldValue;
  itemGroup: FieldValue;
  priority: FieldValue;
  disable: FieldValue;
  selling: FieldValue;
  buying: FieldValue;
  applicableFor: FieldValue;
  customer: FieldValue;
  customerGroup: FieldValue;
  territory: FieldValue;
  salesPartner: FieldValue;
  campaign: FieldValue;
  supplier: FieldValue;
  supplierGroup: FieldValue;
  minQty: FieldValue;
  maxQty: FieldValue;
  validFrom: FieldValue;
  validUpto: FieldValue;
  company: FieldValue;
  currency: FieldValue;
  margin: FieldValue;
  marginType: FieldValue;
  marginRateOrAmount: FieldValue;
  rateOrDiscount: FieldValue;
  rate: FieldValue;
  discountOnPriceListRate: FieldValue;
  forPriceList: FieldValue;
  pricingRuleHelp: FieldValue;
  
}
