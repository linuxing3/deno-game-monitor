// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PosProfile
|--------------------------------------------------------------------------
|
| Model Class and Interface of posProfiles
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class PosProfile extends Model { 
  static table = "posProfiles";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    disabled: DataTypes.STRING,
    series: DataTypes.STRING,
    customer: DataTypes.STRING,
    company: DataTypes.STRING,
    country: DataTypes.STRING,
    warehouse: DataTypes.STRING,
    campaign: DataTypes.STRING,
    companyAddress: DataTypes.STRING,
    updateStock: DataTypes.STRING,
    ignorePricingRule: DataTypes.STRING,
    allowDelete: DataTypes.STRING,
    allowUserToEditRate: DataTypes.STRING,
    allowUserToEditDiscount: DataTypes.STRING,
    allowPrintBeforePay: DataTypes.STRING,
    displayItemsInStock: DataTypes.STRING,
    applicableForUsers: DataTypes.STRING,
    modeOfPayment: DataTypes.STRING,
    salesInvoicePayment: DataTypes.STRING,
    itemGroups: DataTypes.STRING,
    customerGroups: DataTypes.STRING,
    printSettings: DataTypes.STRING,
    printFormatForOnline: DataTypes.STRING,
    letterHead: DataTypes.STRING,
    termsAndConditions: DataTypes.STRING,
    printHeading: DataTypes.STRING,
    offlinePosSettings: DataTypes.STRING,
    territory: DataTypes.STRING,
    printFormat: DataTypes.STRING,
    customerGroup: DataTypes.STRING,
    accounting: DataTypes.STRING,
    priceList: DataTypes.STRING,
    currency: DataTypes.STRING,
    writeOffAccount: DataTypes.STRING,
    writeOffCostCenter: DataTypes.STRING,
    accountForChangeAmount: DataTypes.STRING,
    incomeAccount: DataTypes.STRING,
    expenseAccount: DataTypes.STRING,
    costCenter: DataTypes.STRING,
    taxesAndCharges: DataTypes.STRING,
    applyDiscountOn: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
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
        key: 'series',
        label: 'Series',
        type: 'select',
        placeholder: 'Input Series',
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
        key: 'company',
        label: 'Company',
        type: 'select',
        placeholder: 'Input Company',
        options: '',
        
      },
      {
        key: 'country',
        label: 'Country',
        type: 'input',
        placeholder: 'Input Country',
        options: '',
        
      },
      {
        key: 'warehouse',
        label: 'Warehouse',
        type: 'select',
        placeholder: 'Input Warehouse',
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
        key: 'companyAddress',
        label: 'Company Address',
        type: 'select',
        placeholder: 'Input Company Address',
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
        key: 'updateStock',
        label: 'Update Stock',
        type: 'input',
        placeholder: 'Input Update Stock',
        options: '',
        
      },
      {
        key: 'ignorePricingRule',
        label: 'Ignore Pricing Rule',
        type: 'input',
        placeholder: 'Input Ignore Pricing Rule',
        options: '',
        
      },
      {
        key: 'allowDelete',
        label: 'Allow Delete',
        type: 'input',
        placeholder: 'Input Allow Delete',
        options: '',
        
      },
      {
        key: 'allowUserToEditRate',
        label: 'Allow User To Edit Rate',
        type: 'input',
        placeholder: 'Input Allow User To Edit Rate',
        options: '',
        
      },
      {
        key: 'allowUserToEditDiscount',
        label: 'Allow User To Edit Discount',
        type: 'input',
        placeholder: 'Input Allow User To Edit Discount',
        options: '',
        
      },
      {
        key: 'allowPrintBeforePay',
        label: 'Allow Print Before Pay',
        type: 'input',
        placeholder: 'Input Allow Print Before Pay',
        options: '',
        
      },
      {
        key: 'displayItemsInStock',
        label: 'Display Items In Stock',
        type: 'input',
        placeholder: 'Input Display Items In Stock',
        options: '',
        
      },
      {
        key: 'applicableForUsers',
        label: 'Applicable For Users',
        type: 'input',
        placeholder: 'Input Applicable For Users',
        options: '',
        
      },
      {
        key: 'modeOfPayment',
        label: 'Mode Of Payment',
        type: 'input',
        placeholder: 'Input Mode Of Payment',
        options: '',
        
      },
      {
        key: 'salesInvoicePayment',
        label: 'Sales Invoice Payment',
        type: 'select',
        placeholder: 'Input Sales Invoice Payment',
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
        key: 'itemGroups',
        label: 'Item Groups',
        type: 'select',
        placeholder: 'Input Item Groups',
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
        key: 'customerGroups',
        label: 'Customer Groups',
        type: 'select',
        placeholder: 'Input Customer Groups',
        options: '',
        
      },
      {
        key: 'printSettings',
        label: 'Print Settings',
        type: 'input',
        placeholder: 'Input Print Settings',
        options: '',
        
      },
      {
        key: 'printFormatForOnline',
        label: 'Print Format For Online',
        type: 'select',
        placeholder: 'Input Print Format For Online',
        options: '',
        
      },
      {
        key: 'letterHead',
        label: 'Letter Head',
        type: 'select',
        placeholder: 'Input Letter Head',
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
        key: 'termsAndConditions',
        label: 'Terms And Conditions',
        type: 'select',
        placeholder: 'Input Terms And Conditions',
        options: '',
        
      },
      {
        key: 'printHeading',
        label: 'Print Heading',
        type: 'select',
        placeholder: 'Input Print Heading',
        options: '',
        
      },
      {
        key: 'offlinePosSettings',
        label: 'Offline Pos Settings',
        type: 'input',
        placeholder: 'Input Offline Pos Settings',
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
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'printFormat',
        label: 'Print Format',
        type: 'select',
        placeholder: 'Input Print Format',
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
        key: 'accounting',
        label: 'Accounting',
        type: 'input',
        placeholder: 'Input Accounting',
        options: '',
        
      },
      {
        key: 'priceList',
        label: 'Price List',
        type: 'select',
        placeholder: 'Input Price List',
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
        key: 'writeOffAccount',
        label: 'Write Off Account',
        type: 'select',
        placeholder: 'Input Write Off Account',
        options: '',
        
      },
      {
        key: 'writeOffCostCenter',
        label: 'Write Off Cost Center',
        type: 'select',
        placeholder: 'Input Write Off Cost Center',
        options: '',
        
      },
      {
        key: 'accountForChangeAmount',
        label: 'Account For Change Amount',
        type: 'select',
        placeholder: 'Input Account For Change Amount',
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
        key: 'incomeAccount',
        label: 'Income Account',
        type: 'select',
        placeholder: 'Input Income Account',
        options: '',
        
      },
      {
        key: 'expenseAccount',
        label: 'Expense Account',
        type: 'select',
        placeholder: 'Input Expense Account',
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
        key: 'taxesAndCharges',
        label: 'Taxes And Charges',
        type: 'select',
        placeholder: 'Input Taxes And Charges',
        options: '',
        
      },
      {
        key: 'applyDiscountOn',
        label: 'Apply Discount On',
        type: 'select',
        placeholder: 'Input Apply Discount On',
        options: '[object Object]',
        
      },
      
    ]
  };
}
