// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: TaxRule
|--------------------------------------------------------------------------
|
| Model of taxRules
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class TaxRule extends Model { 
  static table = "taxRules";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    taxType: DataTypes.STRING,
    useForShoppingCart: DataTypes.STRING,
    salesTaxTemplate: DataTypes.STRING,
    purchaseTaxTemplate: DataTypes.STRING,
    filters: DataTypes.STRING,
    customer: DataTypes.STRING,
    supplier: DataTypes.STRING,
    item: DataTypes.STRING,
    billingCity: DataTypes.STRING,
    billingCounty: DataTypes.STRING,
    billingState: DataTypes.STRING,
    billingZipcode: DataTypes.STRING,
    billingCountry: DataTypes.STRING,
    taxCategory: DataTypes.STRING,
    customerGroup: DataTypes.STRING,
    supplierGroup: DataTypes.STRING,
    itemGroup: DataTypes.STRING,
    shippingCity: DataTypes.STRING,
    shippingCounty: DataTypes.STRING,
    shippingState: DataTypes.STRING,
    shippingZipcode: DataTypes.STRING,
    shippingCountry: DataTypes.STRING,
    validity: DataTypes.STRING,
    fromDate: DataTypes.STRING,
    toDate: DataTypes.STRING,
    priority: DataTypes.STRING,
    company: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        
        key: 'taxType',
      
        label: 'Tax Type',
      
        type: 'select',
      
        placeholder: 'Input Tax Type',
      
        options: '[object Object]',
      
      },
      {
        
        key: 'useForShoppingCart',
      
        label: 'Use For Shopping Cart',
      
        type: 'input',
      
        placeholder: 'Input Use For Shopping Cart',
      
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
        
        key: 'salesTaxTemplate',
      
        label: 'Sales Tax Template',
      
        type: 'select',
      
        placeholder: 'Input Sales Tax Template',
      
        options: '',
      
      },
      {
        
        key: 'purchaseTaxTemplate',
      
        label: 'Purchase Tax Template',
      
        type: 'select',
      
        placeholder: 'Input Purchase Tax Template',
      
        options: '',
      
      },
      {
        
        key: 'filters',
      
        label: 'Filters',
      
        type: 'input',
      
        placeholder: 'Input Filters',
      
        options: '',
      
      },
      {
        
        key: 'customer',
      
        label: 'Customer',
      
        type: 'select',
      
        placeholder: 'Input Customer',
      
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
        
        key: 'item',
      
        label: 'Item',
      
        type: 'select',
      
        placeholder: 'Input Item',
      
        options: '',
      
      },
      {
        
        key: 'billingCity',
      
        label: 'Billing City',
      
        type: 'input',
      
        placeholder: 'Input Billing City',
      
        options: '',
      
      },
      {
        
        key: 'billingCounty',
      
        label: 'Billing County',
      
        type: 'input',
      
        placeholder: 'Input Billing County',
      
        options: '',
      
      },
      {
        
        key: 'billingState',
      
        label: 'Billing State',
      
        type: 'input',
      
        placeholder: 'Input Billing State',
      
        options: '',
      
      },
      {
        
        key: 'billingZipcode',
      
        label: 'Billing Zipcode',
      
        type: 'input',
      
        placeholder: 'Input Billing Zipcode',
      
        options: '',
      
      },
      {
        
        key: 'billingCountry',
      
        label: 'Billing Country',
      
        type: 'select',
      
        placeholder: 'Input Billing Country',
      
        options: '',
      
      },
      {
        
        key: 'taxCategory',
      
        label: 'Tax Category',
      
        type: 'select',
      
        placeholder: 'Input Tax Category',
      
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
        
        key: 'customerGroup',
      
        label: 'Customer Group',
      
        type: 'select',
      
        placeholder: 'Input Customer Group',
      
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
        
        key: 'itemGroup',
      
        label: 'Item Group',
      
        type: 'select',
      
        placeholder: 'Input Item Group',
      
        options: '',
      
      },
      {
        
        key: 'shippingCity',
      
        label: 'Shipping City',
      
        type: 'input',
      
        placeholder: 'Input Shipping City',
      
        options: '',
      
      },
      {
        
        key: 'shippingCounty',
      
        label: 'Shipping County',
      
        type: 'input',
      
        placeholder: 'Input Shipping County',
      
        options: '',
      
      },
      {
        
        key: 'shippingState',
      
        label: 'Shipping State',
      
        type: 'input',
      
        placeholder: 'Input Shipping State',
      
        options: '',
      
      },
      {
        
        key: 'shippingZipcode',
      
        label: 'Shipping Zipcode',
      
        type: 'input',
      
        placeholder: 'Input Shipping Zipcode',
      
        options: '',
      
      },
      {
        
        key: 'shippingCountry',
      
        label: 'Shipping Country',
      
        type: 'select',
      
        placeholder: 'Input Shipping Country',
      
        options: '',
      
      },
      {
        
        key: 'validity',
      
        label: 'Validity',
      
        type: 'input',
      
        placeholder: 'Input Validity',
      
        options: '',
      
      },
      {
        
        key: 'fromDate',
      
        label: 'From Date',
      
        type: 'input',
      
        placeholder: 'Input From Date',
      
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
        
        key: 'toDate',
      
        label: 'To Date',
      
        type: 'input',
      
        placeholder: 'Input To Date',
      
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
      
        type: 'input',
      
        placeholder: 'Input Priority',
      
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
      
    ]
  };
} 
