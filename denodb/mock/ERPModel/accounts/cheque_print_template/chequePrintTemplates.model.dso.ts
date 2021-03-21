// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ChequePrintTemplate
|--------------------------------------------------------------------------
|
| Model Class and Interface of chequePrintTemplates
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("chequePrintTemplates")
export class ChequePrintTemplate extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  hasPrintFormat!: string;
  
  @Field({ type: FieldType.STRING })
  primarySettings!: string;
  
  @Field({ type: FieldType.STRING })
  bankName!: string;
  
  @Field({ type: FieldType.STRING })
  chequeSize!: string;
  
  @Field({ type: FieldType.STRING })
  chequeWidth!: string;
  
  @Field({ type: FieldType.STRING })
  chequeHeight!: string;
  
  @Field({ type: FieldType.STRING })
  scannedCheque!: string;
  
  @Field({ type: FieldType.STRING })
  isAccountPayable!: string;
  
  @Field({ type: FieldType.STRING })
  distanceFromLeftEdge!: string;
  
  @Field({ type: FieldType.STRING })
  messageToShow!: string;
  
  @Field({ type: FieldType.STRING })
  dateSettings!: string;
  
  @Field({ type: FieldType.STRING })
  payerSettings!: string;
  
  @Field({ type: FieldType.STRING })
  startingLocationFromLeftEdge!: string;
  
  @Field({ type: FieldType.STRING })
  widthOfAmountInWord!: string;
  
  @Field({ type: FieldType.STRING })
  lineSpacingForAmountInWords!: string;
  
  @Field({ type: FieldType.STRING })
  amountInFigure!: string;
  
  @Field({ type: FieldType.STRING })
  signatoryPosition!: string;
  
  @Field({ type: FieldType.STRING })
  distanceFromTopEdge!: string;
  
  @Field({ type: FieldType.STRING })
  preview!: string;
  
  
}

export interface IChequePrintTemplate {
  id: number;
  hasPrintFormat: string;
  primarySettings: string;
  bankName: string;
  chequeSize: string;
  chequeWidth: string;
  chequeHeight: string;
  scannedCheque: string;
  isAccountPayable: string;
  distanceFromLeftEdge: string;
  messageToShow: string;
  dateSettings: string;
  payerSettings: string;
  startingLocationFromLeftEdge: string;
  widthOfAmountInWord: string;
  lineSpacingForAmountInWords: string;
  amountInFigure: string;
  signatoryPosition: string;
  distanceFromTopEdge: string;
  preview: string;
  
}
