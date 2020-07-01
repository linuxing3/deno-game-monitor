// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ShareBalance
|--------------------------------------------------------------------------
|
| Model of shareBalances
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class ShareBalance extends Model { 
  static table = "shareBalances";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    shareType: DataTypes.STRING,
    fromNo: DataTypes.STRING,
    rate: DataTypes.STRING,
    noOfShares: DataTypes.STRING,
    toNo: DataTypes.STRING,
    amount: DataTypes.STRING,
    isCompany: DataTypes.STRING,
    currentState: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'shareType',
        label: 'Share Type',
        type: 'select',
        placeholder: 'Input Share Type',
        options: '',
        
      },
      {
        key: 'fromNo',
        label: 'From No',
        type: 'input',
        placeholder: 'Input From No',
        options: '',
        
      },
      {
        key: 'rate',
        label: 'Rate',
        type: 'input',
        placeholder: 'Input Rate',
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
        key: 'noOfShares',
        label: 'No Of Shares',
        type: 'input',
        placeholder: 'Input No Of Shares',
        options: '',
        
      },
      {
        key: 'toNo',
        label: 'To No',
        type: 'input',
        placeholder: 'Input To No',
        options: '',
        
      },
      {
        key: 'amount',
        label: 'Amount',
        type: 'input',
        placeholder: 'Input Amount',
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
        key: 'isCompany',
        label: 'Is Company',
        type: 'input',
        placeholder: 'Input Is Company',
        options: '',
        
      },
      {
        key: 'currentState',
        label: 'Current State',
        type: 'select',
        placeholder: 'Input Current State',
        options: '[object Object],[object Object]',
        
      },
      
    ]
  };
} 
