// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ChequePrintTemplate
|--------------------------------------------------------------------------
|
| Model of chequePrintTemplates
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class ChequePrintTemplate extends Model { 
  static table = "chequePrintTemplates";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    hasPrintFormat: DataTypes.STRING,
    primarySettings: DataTypes.STRING,
    bankName: DataTypes.STRING,
    chequeSize: DataTypes.STRING,
    startingPositionFromTopEdge: DataTypes.STRING,
    chequeWidth: DataTypes.STRING,
    chequeHeight: DataTypes.STRING,
    scannedCheque: DataTypes.STRING,
    isAccountPayable: DataTypes.STRING,
    distanceFromTopEdge: DataTypes.STRING,
    distanceFromLeftEdge: DataTypes.STRING,
    messageToShow: DataTypes.STRING,
    dateSettings: DataTypes.STRING,
    distanceFromTopEdge: DataTypes.STRING,
    startingLocationFromLeftEdge: DataTypes.STRING,
    payerSettings: DataTypes.STRING,
    distanceFromTopEdge: DataTypes.STRING,
    startingLocationFromLeftEdge: DataTypes.STRING,
    distanceFromTopEdge: DataTypes.STRING,
    startingLocationFromLeftEdge: DataTypes.STRING,
    widthOfAmountInWord: DataTypes.STRING,
    lineSpacingForAmountInWords: DataTypes.STRING,
    amountInFigure: DataTypes.STRING,
    distanceFromTopEdge: DataTypes.STRING,
    startingLocationFromLeftEdge: DataTypes.STRING,
    distanceFromTopEdge: DataTypes.STRING,
    startingLocationFromLeftEdge: DataTypes.STRING,
    signatoryPosition: DataTypes.STRING,
    distanceFromTopEdge: DataTypes.STRING,
    startingLocationFromLeftEdge: DataTypes.STRING,
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
        
        key: 'startingPositionFromTopEdge',
      
        label: 'Starting Position From Top Edge',
      
        type: 'input',
      
        placeholder: 'Input Starting Position From Top Edge',
      
        options: '',
      
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
        
        key: 'distanceFromTopEdge',
      
        label: 'Distance From Top Edge',
      
        type: 'input',
      
        placeholder: 'Input Distance From Top Edge',
      
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
        
        key: 'distanceFromTopEdge',
      
        label: 'Distance From Top Edge',
      
        type: 'input',
      
        placeholder: 'Input Distance From Top Edge',
      
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
        
        key: 'payerSettings',
      
        label: 'Payer Settings',
      
        type: 'input',
      
        placeholder: 'Input Payer Settings',
      
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
        
        key: 'distanceFromTopEdge',
      
        label: 'Distance From Top Edge',
      
        type: 'input',
      
        placeholder: 'Input Distance From Top Edge',
      
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
        
        key: 'distanceFromTopEdge',
      
        label: 'Distance From Top Edge',
      
        type: 'input',
      
        placeholder: 'Input Distance From Top Edge',
      
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
        
        key: 'distanceFromTopEdge',
      
        label: 'Distance From Top Edge',
      
        type: 'input',
      
        placeholder: 'Input Distance From Top Edge',
      
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
        
        key: 'startingLocationFromLeftEdge',
      
        label: 'Starting Location From Left Edge',
      
        type: 'input',
      
        placeholder: 'Input Starting Location From Left Edge',
      
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
