// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: GlEntry
|--------------------------------------------------------------------------
|
| Model of glEntrys
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class GlEntry extends Model { 
  static table = "glEntrys";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    postingDate: DataTypes.STRING,
    transactionDate: DataTypes.STRING,
    account: DataTypes.STRING,
    partyType: DataTypes.STRING,
    party: DataTypes.STRING,
    costCenter: DataTypes.STRING,
    debitAmount: DataTypes.STRING,
    creditAmount: DataTypes.STRING,
    accountCurrency: DataTypes.STRING,
    debitAmountInAccountCurrency: DataTypes.STRING,
    creditAmountInAccountCurrency: DataTypes.STRING,
    against: DataTypes.STRING,
    againstVoucherType: DataTypes.STRING,
    againstVoucher: DataTypes.STRING,
    voucherType: DataTypes.STRING,
    voucherNo: DataTypes.STRING,
    voucherDetailNo: DataTypes.STRING,
    project: DataTypes.STRING,
    remarks: DataTypes.STRING,
    isOpening: DataTypes.STRING,
    isAdvance: DataTypes.STRING,
    fiscalYear: DataTypes.STRING,
    company: DataTypes.STRING,
    financeBook: DataTypes.STRING,
    toRename: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        
        key: 'postingDate',
      
        label: 'Posting Date',
      
        type: 'input',
      
        placeholder: 'Input Posting Date',
      
        options: '',
      
      },
      {
        
        key: 'transactionDate',
      
        label: 'Transaction Date',
      
        type: 'input',
      
        placeholder: 'Input Transaction Date',
      
        options: '',
      
      },
      {
        
        key: 'account',
      
        label: 'Account',
      
        type: 'select',
      
        placeholder: 'Input Account',
      
        options: '',
      
      },
      {
        
        key: 'partyType',
      
        label: 'Party Type',
      
        type: 'select',
      
        placeholder: 'Input Party Type',
      
        options: '',
      
      },
      {
        
        key: 'party',
      
        label: 'Party',
      
        type: 'select',
      
        placeholder: 'Input Party',
      
        options: '',
      
      },
      {
        
        key: 'costCenter',
      
        label: 'Cost Center',
      
        type: 'select',
      
        placeholder: 'Input Cost Center',
      
        options: '',
      
      },
      {
        
        key: 'debitAmount',
      
        label: 'Debit Amount',
      
        type: 'select',
      
        placeholder: 'Input Debit Amount',
      
        options: '',
      
      },
      {
        
        key: 'creditAmount',
      
        label: 'Credit Amount',
      
        type: 'select',
      
        placeholder: 'Input Credit Amount',
      
        options: '',
      
      },
      {
        
        key: 'accountCurrency',
      
        label: 'Account Currency',
      
        type: 'select',
      
        placeholder: 'Input Account Currency',
      
        options: '',
      
      },
      {
        
        key: 'debitAmountInAccountCurrency',
      
        label: 'Debit Amount In Account Currency',
      
        type: 'select',
      
        placeholder: 'Input Debit Amount In Account Currency',
      
        options: '',
      
      },
      {
        
        key: 'creditAmountInAccountCurrency',
      
        label: 'Credit Amount In Account Currency',
      
        type: 'select',
      
        placeholder: 'Input Credit Amount In Account Currency',
      
        options: '',
      
      },
      {
        
        key: 'against',
      
        label: 'Against',
      
        type: 'input',
      
        placeholder: 'Input Against',
      
        options: '',
      
      },
      {
        
        key: 'againstVoucherType',
      
        label: 'Against Voucher Type',
      
        type: 'select',
      
        placeholder: 'Input Against Voucher Type',
      
        options: '',
      
      },
      {
        
        key: 'againstVoucher',
      
        label: 'Against Voucher',
      
        type: 'select',
      
        placeholder: 'Input Against Voucher',
      
        options: '',
      
      },
      {
        
        key: 'voucherType',
      
        label: 'Voucher Type',
      
        type: 'select',
      
        placeholder: 'Input Voucher Type',
      
        options: '',
      
      },
      {
        
        key: 'voucherNo',
      
        label: 'Voucher No',
      
        type: 'select',
      
        placeholder: 'Input Voucher No',
      
        options: '',
      
      },
      {
        
        key: 'voucherDetailNo',
      
        label: 'Voucher Detail No',
      
        type: 'input',
      
        placeholder: 'Input Voucher Detail No',
      
        options: '',
      
      },
      {
        
        key: 'project',
      
        label: 'Project',
      
        type: 'select',
      
        placeholder: 'Input Project',
      
        options: '',
      
      },
      {
        
        key: 'remarks',
      
        label: 'Remarks',
      
        type: 'input',
      
        placeholder: 'Input Remarks',
      
        options: '',
      
      },
      {
        
        key: 'isOpening',
      
        label: 'Is Opening',
      
        type: 'select',
      
        placeholder: 'Input Is Opening',
      
        options: '[object Object]',
      
      },
      {
        
        key: 'isAdvance',
      
        label: 'Is Advance',
      
        type: 'select',
      
        placeholder: 'Input Is Advance',
      
        options: '[object Object]',
      
      },
      {
        
        key: 'fiscalYear',
      
        label: 'Fiscal Year',
      
        type: 'select',
      
        placeholder: 'Input Fiscal Year',
      
        options: '',
      
      },
      {
        
        key: 'company',
      
        label: 'Company',
      
        type: 'select',
      
        placeholder: 'Input Company',
      
        options: '',
      
      },
      {
        
        key: 'financeBook',
      
        label: 'Finance Book',
      
        type: 'select',
      
        placeholder: 'Input Finance Book',
      
        options: '',
      
      },
      {
        
        key: 'toRename',
      
        label: 'To Rename',
      
        type: 'input',
      
        placeholder: 'Input To Rename',
      
        options: '',
      
      },
      
    ]
  };
} 
