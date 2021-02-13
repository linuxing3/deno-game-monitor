// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: OpeningInvoiceCreationToolItem
|--------------------------------------------------------------------------
|
| Model Class and Interface of openingInvoiceCreationToolItems
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("openingInvoiceCreationToolItems")
export class OpeningInvoiceCreationToolItem extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  partyType!: string;
  
  @Field({ type: FieldType.STRING })
  party!: string;
  
  @Field({ type: FieldType.STRING })
  temporaryOpeningAccount!: string;
  
  @Field({ type: FieldType.STRING })
  postingDate!: string;
  
  @Field({ type: FieldType.STRING })
  dueDate!: string;
  
  @Field({ type: FieldType.STRING })
  itemName!: string;
  
  @Field({ type: FieldType.STRING })
  outstandingAmount!: string;
  
  @Field({ type: FieldType.STRING })
  quantity!: string;
  
  
}

export interface IOpeningInvoiceCreationToolItem {
  id: number;
  partyType: string;
  party: string;
  temporaryOpeningAccount: string;
  postingDate: string;
  dueDate: string;
  itemName: string;
  outstandingAmount: string;
  quantity: string;
  
}
