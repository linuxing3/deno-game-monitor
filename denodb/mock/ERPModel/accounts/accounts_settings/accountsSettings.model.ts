// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: AccountsSetting
|--------------------------------------------------------------------------
|
| Model Class and Interface of accountsSettings
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


export class AccountsSetting extends Model { 
  static table = "accountsSettings";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    makeAccountingEntryForEveryStockMovement: DataTypes.STRING,
    accountsFrozenUpto: DataTypes.STRING,
    roleAllowedToSetFrozenAccountsEditFrozenEntries: DataTypes.STRING,
    determineAddressTaxCategoryFrom: DataTypes.STRING,
    creditController: DataTypes.STRING,
    checkSupplierInvoiceNumberUniqueness: DataTypes.STRING,
    makePaymentViaJournalEntry: DataTypes.STRING,
    unlinkPaymentOnCancellationOfInvoice: DataTypes.STRING,
    bookAssetDepreciationEntryAutomatically: DataTypes.STRING,
    allowCostCenterInEntryOfBalanceSheetAccount: DataTypes.STRING,
    automaticallyAddTaxesAndChargesFromItemTaxTemplate: DataTypes.STRING,
    printSettings: DataTypes.STRING,
    showInclusiveTaxInPrint: DataTypes.STRING,
    showPaymentScheduleInPrint: DataTypes.STRING,
    currencyExchangeSettings: DataTypes.STRING,
    allowStaleExchangeRates: DataTypes.STRING,
    staleDays: DataTypes.STRING,
    reportSettings: DataTypes.STRING,
    useCustomCashFlowFormat: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'makeAccountingEntryForEveryStockMovement',
        label: 'Make Accounting Entry For Every Stock Movement',
        type: 'input',
        placeholder: 'Input Make Accounting Entry For Every Stock Movement',
        options: '',
        
      },
      {
        key: 'accountsFrozenUpto',
        label: 'Accounts Frozen Upto',
        type: 'input',
        placeholder: 'Input Accounts Frozen Upto',
        options: '',
        
      },
      {
        key: 'roleAllowedToSetFrozenAccountsEditFrozenEntries',
        label: 'Role Allowed To Set Frozen Accounts Edit Frozen Entries',
        type: 'select',
        placeholder: 'Input Role Allowed To Set Frozen Accounts Edit Frozen Entries',
        options: '',
        
      },
      {
        key: 'determineAddressTaxCategoryFrom',
        label: 'Determine Address Tax Category From',
        type: 'select',
        placeholder: 'Input Determine Address Tax Category From',
        options: '[object Object]',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'creditController',
        label: 'Credit Controller',
        type: 'select',
        placeholder: 'Input Credit Controller',
        options: '',
        
      },
      {
        key: 'checkSupplierInvoiceNumberUniqueness',
        label: 'Check Supplier Invoice Number Uniqueness',
        type: 'input',
        placeholder: 'Input Check Supplier Invoice Number Uniqueness',
        options: '',
        
      },
      {
        key: 'makePaymentViaJournalEntry',
        label: 'Make Payment Via Journal Entry',
        type: 'input',
        placeholder: 'Input Make Payment Via Journal Entry',
        options: '',
        
      },
      {
        key: 'unlinkPaymentOnCancellationOfInvoice',
        label: 'Unlink Payment On Cancellation Of Invoice',
        type: 'input',
        placeholder: 'Input Unlink Payment On Cancellation Of Invoice',
        options: '',
        
      },
      {
        key: 'bookAssetDepreciationEntryAutomatically',
        label: 'Book Asset Depreciation Entry Automatically',
        type: 'input',
        placeholder: 'Input Book Asset Depreciation Entry Automatically',
        options: '',
        
      },
      {
        key: 'allowCostCenterInEntryOfBalanceSheetAccount',
        label: 'Allow Cost Center In Entry Of Balance Sheet Account',
        type: 'input',
        placeholder: 'Input Allow Cost Center In Entry Of Balance Sheet Account',
        options: '',
        
      },
      {
        key: 'automaticallyAddTaxesAndChargesFromItemTaxTemplate',
        label: 'Automatically Add Taxes And Charges From Item Tax Template',
        type: 'input',
        placeholder: 'Input Automatically Add Taxes And Charges From Item Tax Template',
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
        key: 'showInclusiveTaxInPrint',
        label: 'Show Inclusive Tax In Print',
        type: 'input',
        placeholder: 'Input Show Inclusive Tax In Print',
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
        key: 'showPaymentScheduleInPrint',
        label: 'Show Payment Schedule In Print',
        type: 'input',
        placeholder: 'Input Show Payment Schedule In Print',
        options: '',
        
      },
      {
        key: 'currencyExchangeSettings',
        label: 'Currency Exchange Settings',
        type: 'input',
        placeholder: 'Input Currency Exchange Settings',
        options: '',
        
      },
      {
        key: 'allowStaleExchangeRates',
        label: 'Allow Stale Exchange Rates',
        type: 'input',
        placeholder: 'Input Allow Stale Exchange Rates',
        options: '',
        
      },
      {
        key: 'staleDays',
        label: 'Stale Days',
        type: 'input',
        placeholder: 'Input Stale Days',
        options: '',
        
      },
      {
        key: 'reportSettings',
        label: 'Report Settings',
        type: 'input',
        placeholder: 'Input Report Settings',
        options: '',
        
      },
      {
        key: 'useCustomCashFlowFormat',
        label: 'Use Custom Cash Flow Format',
        type: 'input',
        placeholder: 'Input Use Custom Cash Flow Format',
        options: '',
        
      },
      
    ]
  };
}

export interface IAccountsSetting {
  id: FieldValue;
  makeAccountingEntryForEveryStockMovement: FieldValue;
  accountsFrozenUpto: FieldValue;
  roleAllowedToSetFrozenAccountsEditFrozenEntries: FieldValue;
  determineAddressTaxCategoryFrom: FieldValue;
  creditController: FieldValue;
  checkSupplierInvoiceNumberUniqueness: FieldValue;
  makePaymentViaJournalEntry: FieldValue;
  unlinkPaymentOnCancellationOfInvoice: FieldValue;
  bookAssetDepreciationEntryAutomatically: FieldValue;
  allowCostCenterInEntryOfBalanceSheetAccount: FieldValue;
  automaticallyAddTaxesAndChargesFromItemTaxTemplate: FieldValue;
  printSettings: FieldValue;
  showInclusiveTaxInPrint: FieldValue;
  showPaymentScheduleInPrint: FieldValue;
  currencyExchangeSettings: FieldValue;
  allowStaleExchangeRates: FieldValue;
  staleDays: FieldValue;
  reportSettings: FieldValue;
  useCustomCashFlowFormat: FieldValue;
  
}
