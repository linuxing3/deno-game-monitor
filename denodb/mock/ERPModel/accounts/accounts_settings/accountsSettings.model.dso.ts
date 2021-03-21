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
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("accountsSettings")
export class AccountsSetting extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  makeAccountingEntryForEveryStockMovement!: string;
  
  @Field({ type: FieldType.STRING })
  accountsFrozenUpto!: string;
  
  @Field({ type: FieldType.STRING })
  roleAllowedToSetFrozenAccountsEditFrozenEntries!: string;
  
  @Field({ type: FieldType.STRING })
  determineAddressTaxCategoryFrom!: string;
  
  @Field({ type: FieldType.STRING })
  creditController!: string;
  
  @Field({ type: FieldType.STRING })
  checkSupplierInvoiceNumberUniqueness!: string;
  
  @Field({ type: FieldType.STRING })
  makePaymentViaJournalEntry!: string;
  
  @Field({ type: FieldType.STRING })
  unlinkPaymentOnCancellationOfInvoice!: string;
  
  @Field({ type: FieldType.STRING })
  bookAssetDepreciationEntryAutomatically!: string;
  
  @Field({ type: FieldType.STRING })
  allowCostCenterInEntryOfBalanceSheetAccount!: string;
  
  @Field({ type: FieldType.STRING })
  automaticallyAddTaxesAndChargesFromItemTaxTemplate!: string;
  
  @Field({ type: FieldType.STRING })
  printSettings!: string;
  
  @Field({ type: FieldType.STRING })
  showInclusiveTaxInPrint!: string;
  
  @Field({ type: FieldType.STRING })
  showPaymentScheduleInPrint!: string;
  
  @Field({ type: FieldType.STRING })
  currencyExchangeSettings!: string;
  
  @Field({ type: FieldType.STRING })
  allowStaleExchangeRates!: string;
  
  @Field({ type: FieldType.STRING })
  staleDays!: string;
  
  @Field({ type: FieldType.STRING })
  reportSettings!: string;
  
  @Field({ type: FieldType.STRING })
  useCustomCashFlowFormat!: string;
  
  
}

export interface IAccountsSetting {
  id: number;
  makeAccountingEntryForEveryStockMovement: string;
  accountsFrozenUpto: string;
  roleAllowedToSetFrozenAccountsEditFrozenEntries: string;
  determineAddressTaxCategoryFrom: string;
  creditController: string;
  checkSupplierInvoiceNumberUniqueness: string;
  makePaymentViaJournalEntry: string;
  unlinkPaymentOnCancellationOfInvoice: string;
  bookAssetDepreciationEntryAutomatically: string;
  allowCostCenterInEntryOfBalanceSheetAccount: string;
  automaticallyAddTaxesAndChargesFromItemTaxTemplate: string;
  printSettings: string;
  showInclusiveTaxInPrint: string;
  showPaymentScheduleInPrint: string;
  currencyExchangeSettings: string;
  allowStaleExchangeRates: string;
  staleDays: string;
  reportSettings: string;
  useCustomCashFlowFormat: string;
  
}
