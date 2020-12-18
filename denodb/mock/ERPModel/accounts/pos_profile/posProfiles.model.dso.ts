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
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("posProfiles")
export class PosProfile extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  disabled!: string;
  
  @Field({ type: FieldType.STRING })
  series!: string;
  
  @Field({ type: FieldType.STRING })
  customer!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  country!: string;
  
  @Field({ type: FieldType.STRING })
  warehouse!: string;
  
  @Field({ type: FieldType.STRING })
  campaign!: string;
  
  @Field({ type: FieldType.STRING })
  companyAddress!: string;
  
  @Field({ type: FieldType.STRING })
  updateStock!: string;
  
  @Field({ type: FieldType.STRING })
  ignorePricingRule!: string;
  
  @Field({ type: FieldType.STRING })
  allowDelete!: string;
  
  @Field({ type: FieldType.STRING })
  allowUserToEditRate!: string;
  
  @Field({ type: FieldType.STRING })
  allowUserToEditDiscount!: string;
  
  @Field({ type: FieldType.STRING })
  allowPrintBeforePay!: string;
  
  @Field({ type: FieldType.STRING })
  displayItemsInStock!: string;
  
  @Field({ type: FieldType.STRING })
  applicableForUsers!: string;
  
  @Field({ type: FieldType.STRING })
  modeOfPayment!: string;
  
  @Field({ type: FieldType.STRING })
  salesInvoicePayment!: string;
  
  @Field({ type: FieldType.STRING })
  itemGroups!: string;
  
  @Field({ type: FieldType.STRING })
  customerGroups!: string;
  
  @Field({ type: FieldType.STRING })
  printSettings!: string;
  
  @Field({ type: FieldType.STRING })
  printFormatForOnline!: string;
  
  @Field({ type: FieldType.STRING })
  letterHead!: string;
  
  @Field({ type: FieldType.STRING })
  termsAndConditions!: string;
  
  @Field({ type: FieldType.STRING })
  printHeading!: string;
  
  @Field({ type: FieldType.STRING })
  offlinePosSettings!: string;
  
  @Field({ type: FieldType.STRING })
  territory!: string;
  
  @Field({ type: FieldType.STRING })
  printFormat!: string;
  
  @Field({ type: FieldType.STRING })
  customerGroup!: string;
  
  @Field({ type: FieldType.STRING })
  accounting!: string;
  
  @Field({ type: FieldType.STRING })
  priceList!: string;
  
  @Field({ type: FieldType.STRING })
  currency!: string;
  
  @Field({ type: FieldType.STRING })
  writeOffAccount!: string;
  
  @Field({ type: FieldType.STRING })
  writeOffCostCenter!: string;
  
  @Field({ type: FieldType.STRING })
  accountForChangeAmount!: string;
  
  @Field({ type: FieldType.STRING })
  incomeAccount!: string;
  
  @Field({ type: FieldType.STRING })
  expenseAccount!: string;
  
  @Field({ type: FieldType.STRING })
  costCenter!: string;
  
  @Field({ type: FieldType.STRING })
  taxesAndCharges!: string;
  
  @Field({ type: FieldType.STRING })
  applyDiscountOn!: string;
  
  
}

export interface IPosProfile {
  id: number;
  disabled: string;
  series: string;
  customer: string;
  company: string;
  country: string;
  warehouse: string;
  campaign: string;
  companyAddress: string;
  updateStock: string;
  ignorePricingRule: string;
  allowDelete: string;
  allowUserToEditRate: string;
  allowUserToEditDiscount: string;
  allowPrintBeforePay: string;
  displayItemsInStock: string;
  applicableForUsers: string;
  modeOfPayment: string;
  salesInvoicePayment: string;
  itemGroups: string;
  customerGroups: string;
  printSettings: string;
  printFormatForOnline: string;
  letterHead: string;
  termsAndConditions: string;
  printHeading: string;
  offlinePosSettings: string;
  territory: string;
  printFormat: string;
  customerGroup: string;
  accounting: string;
  priceList: string;
  currency: string;
  writeOffAccount: string;
  writeOffCostCenter: string;
  accountForChangeAmount: string;
  incomeAccount: string;
  expenseAccount: string;
  costCenter: string;
  taxesAndCharges: string;
  applyDiscountOn: string;
  
}
