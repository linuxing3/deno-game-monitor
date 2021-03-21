// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: BankGuarantee
|--------------------------------------------------------------------------
|
| Model Class and Interface of bankGuarantees
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";
import {
  ModelFields,
} from "https://deno.land/x/denodb/lib/model.ts";


export class BankGuarantee extends Model { 
  static table = "bankGuarantees";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    bankGuaranteeType: DataTypes.STRING,
    referenceDocumentType: DataTypes.STRING,
    referenceDocumentName: DataTypes.STRING,
    customer: DataTypes.STRING,
    supplier: DataTypes.STRING,
    project: DataTypes.STRING,
    amount: DataTypes.STRING,
    startDate: DataTypes.STRING,
    validityInDays: DataTypes.STRING,
    endDate: DataTypes.STRING,
    bankAccountInfo: DataTypes.STRING,
    bank: DataTypes.STRING,
    bankAccount: DataTypes.STRING,
    account: DataTypes.STRING,
    bankAccountNo: DataTypes.STRING,
    iban: DataTypes.STRING,
    branchCode: DataTypes.STRING,
    swiftNumber: DataTypes.STRING,
    clausesAndConditions: DataTypes.STRING,
    otherDetails: DataTypes.STRING,
    bankGuaranteeNumber: DataTypes.STRING,
    nameOfBeneficiary: DataTypes.STRING,
    marginMoney: DataTypes.STRING,
    chargesIncurred: DataTypes.STRING,
    fixedDepositNumber: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'bankGuaranteeType',
        label: 'Bank Guarantee Type',
        type: 'select',
        placeholder: 'Input Bank Guarantee Type',
        options: '[object Object],[object Object]',
        
      },
      {
        key: 'referenceDocumentType',
        label: 'Reference Document Type',
        type: 'select',
        placeholder: 'Input Reference Document Type',
        options: '',
        
      },
      {
        key: 'referenceDocumentName',
        label: 'Reference Document Name',
        type: 'select',
        placeholder: 'Input Reference Document Name',
        options: '',
        
      },
      {
        key: 'customer',
        label: 'Customer',
        type: 'select',
        placeholder: 'Input Customer',
        options: '',
        
      },
      {
        key: 'supplier',
        label: 'Supplier',
        type: 'select',
        placeholder: 'Input Supplier',
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
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
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
        key: 'startDate',
        label: 'Start Date',
        type: 'input',
        placeholder: 'Input Start Date',
        options: '',
        
      },
      {
        key: 'validityInDays',
        label: 'Validity In Days',
        type: 'input',
        placeholder: 'Input Validity In Days',
        options: '',
        
      },
      {
        key: 'endDate',
        label: 'End Date',
        type: 'input',
        placeholder: 'Input End Date',
        options: '',
        
      },
      {
        key: 'bankAccountInfo',
        label: 'Bank Account Info',
        type: 'input',
        placeholder: 'Input Bank Account Info',
        options: '',
        
      },
      {
        key: 'bank',
        label: 'Bank',
        type: 'select',
        placeholder: 'Input Bank',
        options: '',
        
      },
      {
        key: 'bankAccount',
        label: 'Bank Account',
        type: 'select',
        placeholder: 'Input Bank Account',
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
        key: 'bankAccountNo',
        label: 'Bank Account No',
        type: 'input',
        placeholder: 'Input Bank Account No',
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
        key: 'iban',
        label: 'Iban',
        type: 'input',
        placeholder: 'Input Iban',
        options: '',
        
      },
      {
        key: 'branchCode',
        label: 'Branch Code',
        type: 'input',
        placeholder: 'Input Branch Code',
        options: '',
        
      },
      {
        key: 'swiftNumber',
        label: 'Swift Number',
        type: 'input',
        placeholder: 'Input Swift Number',
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
        key: 'clausesAndConditions',
        label: 'Clauses And Conditions',
        type: 'input',
        placeholder: 'Input Clauses And Conditions',
        options: '',
        
      },
      {
        key: 'otherDetails',
        label: 'Other Details',
        type: 'input',
        placeholder: 'Input Other Details',
        options: '',
        
      },
      {
        key: 'bankGuaranteeNumber',
        label: 'Bank Guarantee Number',
        type: 'input',
        placeholder: 'Input Bank Guarantee Number',
        options: '',
        
      },
      {
        key: 'nameOfBeneficiary',
        label: 'Name Of Beneficiary',
        type: 'input',
        placeholder: 'Input Name Of Beneficiary',
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
        key: 'marginMoney',
        label: 'Margin Money',
        type: 'input',
        placeholder: 'Input Margin Money',
        options: '',
        
      },
      {
        key: 'chargesIncurred',
        label: 'Charges Incurred',
        type: 'input',
        placeholder: 'Input Charges Incurred',
        options: '',
        
      },
      {
        key: 'fixedDepositNumber',
        label: 'Fixed Deposit Number',
        type: 'input',
        placeholder: 'Input Fixed Deposit Number',
        options: '',
        
      },
      {
        key: 'amendedFrom',
        label: 'Amended From',
        type: 'select',
        placeholder: 'Input Amended From',
        options: '',
        
      },
      
    ]
  };
}
