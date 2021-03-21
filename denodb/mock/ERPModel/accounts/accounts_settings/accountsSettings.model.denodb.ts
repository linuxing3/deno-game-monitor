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


export class AccountsSetting extends Model { 
  static table = "accountsSettings";
  static timestamps = true;
  
  static fields = {
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

}
