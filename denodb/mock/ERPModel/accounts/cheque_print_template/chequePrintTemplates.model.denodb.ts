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
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";
import {
  FieldValue,
} from "https://deno.land/x/denodb/lib/query-builder.ts";
import {
  ModelFields,
} from "https://deno.land/x/denodb/lib/model.ts";


export class ChequePrintTemplate extends Model { 
  static table = "chequePrintTemplates";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    hasPrintFormat: DataTypes.STRING,
    primarySettings: DataTypes.STRING,
    bankName: DataTypes.STRING,
    chequeSize: DataTypes.STRING,
    chequeWidth: DataTypes.STRING,
    chequeHeight: DataTypes.STRING,
    scannedCheque: DataTypes.STRING,
    isAccountPayable: DataTypes.STRING,
    distanceFromLeftEdge: DataTypes.STRING,
    messageToShow: DataTypes.STRING,
    dateSettings: DataTypes.STRING,
    payerSettings: DataTypes.STRING,
    startingLocationFromLeftEdge: DataTypes.STRING,
    widthOfAmountInWord: DataTypes.STRING,
    lineSpacingForAmountInWords: DataTypes.STRING,
    amountInFigure: DataTypes.STRING,
    signatoryPosition: DataTypes.STRING,
    distanceFromTopEdge: DataTypes.STRING,
    preview: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: '',
        label: '',
        type: 'select',
        placeholder: 'Input ',
        options: '[object Object],[object Object]',
        
      },
      {
        key: 'hasPrintFormat',
        label: 'Has Print Format',
        type: 'input',
        placeholder: 'Input Has Print Format',
        options: '',
        
      },
      {
        key: 'primarySettings',
        label: 'Primary Settings',
        type: 'input',
        placeholder: 'Input Primary Settings',
        options: '',
        
      },
      {
        key: 'bankName',
        label: 'Bank Name',
        type: 'input',
        placeholder: 'Input Bank Name',
        options: '',
        
      },
      {
        key: 'chequeSize',
        label: 'Cheque Size',
        type: 'select',
        placeholder: 'Input Cheque Size',
        options: '[object Object],[object Object]',
        
      },
      {
        key: 'chequeWidth',
        label: 'Cheque Width',
        type: 'input',
        placeholder: 'Input Cheque Width',
        options: '',
        
      },
      {
        key: 'chequeHeight',
        label: 'Cheque Height',
        type: 'input',
        placeholder: 'Input Cheque Height',
        options: '',
        
      },
      {
        key: 'scannedCheque',
        label: 'Scanned Cheque',
        type: 'input',
        placeholder: 'Input Scanned Cheque',
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
        key: 'isAccountPayable',
        label: 'Is Account Payable',
        type: 'input',
        placeholder: 'Input Is Account Payable',
        options: '',
        
      },
      {
        key: 'distanceFromLeftEdge',
        label: 'Distance From Left Edge',
        type: 'input',
        placeholder: 'Input Distance From Left Edge',
        options: '',
        
      },
      {
        key: 'messageToShow',
        label: 'Message To Show',
        type: 'input',
        placeholder: 'Input Message To Show',
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
        key: 'dateSettings',
        label: 'Date Settings',
        type: 'select',
        placeholder: 'Input Date Settings',
        options: '',
        
      },
      {
        key: 'payerSettings',
        label: 'Payer Settings',
        type: 'input',
        placeholder: 'Input Payer Settings',
        options: '',
        
      },
      {
        key: 'startingLocationFromLeftEdge',
        label: 'Starting Location From Left Edge',
        type: 'input',
        placeholder: 'Input Starting Location From Left Edge',
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
        key: '',
        label: '',
        type: 'select',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'widthOfAmountInWord',
        label: 'Width Of Amount In Word',
        type: 'input',
        placeholder: 'Input Width Of Amount In Word',
        options: '',
        
      },
      {
        key: 'lineSpacingForAmountInWords',
        label: 'Line Spacing For Amount In Words',
        type: 'input',
        placeholder: 'Input Line Spacing For Amount In Words',
        options: '',
        
      },
      {
        key: 'amountInFigure',
        label: 'Amount In Figure',
        type: 'input',
        placeholder: 'Input Amount In Figure',
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
        key: '',
        label: '',
        type: 'select',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'signatoryPosition',
        label: 'Signatory Position',
        type: 'input',
        placeholder: 'Input Signatory Position',
        options: '',
        
      },
      {
        key: 'distanceFromTopEdge',
        label: 'Distance From Top Edge',
        type: 'input',
        placeholder: 'Input Distance From Top Edge',
        options: '',
        
      },
      {
        key: 'preview',
        label: 'Preview',
        type: 'input',
        placeholder: 'Input Preview',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      
    ]
  };
}

export interface IChequePrintTemplate {
  id: FieldValue;
  hasPrintFormat: FieldValue;
  primarySettings: FieldValue;
  bankName: FieldValue;
  chequeSize: FieldValue;
  chequeWidth: FieldValue;
  chequeHeight: FieldValue;
  scannedCheque: FieldValue;
  isAccountPayable: FieldValue;
  distanceFromLeftEdge: FieldValue;
  messageToShow: FieldValue;
  dateSettings: FieldValue;
  payerSettings: FieldValue;
  startingLocationFromLeftEdge: FieldValue;
  widthOfAmountInWord: FieldValue;
  lineSpacingForAmountInWords: FieldValue;
  amountInFigure: FieldValue;
  signatoryPosition: FieldValue;
  distanceFromTopEdge: FieldValue;
  preview: FieldValue;
  
}
