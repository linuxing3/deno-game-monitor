// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: Subscription
|--------------------------------------------------------------------------
|
| Model Class and Interface of subscriptions
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("subscriptions")
export class Subscription extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  customer!: string;
  
  @Field({ type: FieldType.STRING })
  status!: string;
  
  @Field({ type: FieldType.STRING })
  subscriptionPeriod!: string;
  
  @Field({ type: FieldType.STRING })
  subscriptionStartDate!: string;
  
  @Field({ type: FieldType.STRING })
  cancelationDate!: string;
  
  @Field({ type: FieldType.STRING })
  trialPeriodStartDate!: string;
  
  @Field({ type: FieldType.STRING })
  trialPeriodEndDate!: string;
  
  @Field({ type: FieldType.STRING })
  currentInvoiceStartDate!: string;
  
  @Field({ type: FieldType.STRING })
  currentInvoiceEndDate!: string;
  
  @Field({ type: FieldType.STRING })
  daysUntilDue!: string;
  
  @Field({ type: FieldType.STRING })
  cancelAtEndOfPeriod!: string;
  
  @Field({ type: FieldType.STRING })
  generateInvoiceAtBeginningOfPeriod!: string;
  
  @Field({ type: FieldType.STRING })
  plans!: string;
  
  @Field({ type: FieldType.STRING })
  taxes!: string;
  
  @Field({ type: FieldType.STRING })
  salesTaxesAndChargesTemplate!: string;
  
  @Field({ type: FieldType.STRING })
  discounts!: string;
  
  @Field({ type: FieldType.STRING })
  applyAdditionalDiscountOn!: string;
  
  @Field({ type: FieldType.STRING })
  additionalDIscountPercentage!: string;
  
  @Field({ type: FieldType.STRING })
  additionalDIscountAmount!: string;
  
  @Field({ type: FieldType.STRING })
  invoices!: string;
  
  
}

export interface ISubscription {
  id: number;
  customer: string;
  status: string;
  subscriptionPeriod: string;
  subscriptionStartDate: string;
  cancelationDate: string;
  trialPeriodStartDate: string;
  trialPeriodEndDate: string;
  currentInvoiceStartDate: string;
  currentInvoiceEndDate: string;
  daysUntilDue: string;
  cancelAtEndOfPeriod: string;
  generateInvoiceAtBeginningOfPeriod: string;
  plans: string;
  taxes: string;
  salesTaxesAndChargesTemplate: string;
  discounts: string;
  applyAdditionalDiscountOn: string;
  additionalDIscountPercentage: string;
  additionalDIscountAmount: string;
  invoices: string;
  
}
