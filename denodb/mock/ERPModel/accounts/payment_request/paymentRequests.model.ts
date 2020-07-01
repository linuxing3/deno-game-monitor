// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PaymentRequest
|--------------------------------------------------------------------------
|
| Model of paymentRequests
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";

export class PaymentRequest extends Model { 
  static table = "paymentRequests";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    paymentRequestType: DataTypes.STRING,
    transactionDate: DataTypes.STRING,
    series: DataTypes.STRING,
    modeOfPayment: DataTypes.STRING,
    partyDetails: DataTypes.STRING,
    partyType: DataTypes.STRING,
    party: DataTypes.STRING,
    referenceDoctype: DataTypes.STRING,
    referenceName: DataTypes.STRING,
    transactionDetails: DataTypes.STRING,
    amount: DataTypes.STRING,
    isASubscription: DataTypes.STRING,
    transactionCurrency: DataTypes.STRING,
    subscriptionSection: DataTypes.STRING,
    subscriptionPlans: DataTypes.STRING,
    bankAccountDetails: DataTypes.STRING,
    bankAccount: DataTypes.STRING,
    bank: DataTypes.STRING,
    bankAccountNo: DataTypes.STRING,
    account: DataTypes.STRING,
    iban: DataTypes.STRING,
    branchCode: DataTypes.STRING,
    swiftNumber: DataTypes.STRING,
    recipientMessageAndPaymentDetails: DataTypes.STRING,
    printFormat: DataTypes.STRING,
    to: DataTypes.STRING,
    subject: DataTypes.STRING,
    paymentGatewayAccount: DataTypes.STRING,
    status: DataTypes.STRING,
    makeSalesInvoice: DataTypes.STRING,
    message: DataTypes.STRING,
    messageExamples: DataTypes.STRING,
    muteEmail: DataTypes.STRING,
    paymentUrl: DataTypes.STRING,
    paymentGatewayDetails: DataTypes.STRING,
    paymentGateway: DataTypes.STRING,
    paymentAccount: DataTypes.STRING,
    paymentOrder: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        
        key: 'paymentRequestType',
      
        label: 'Payment Request Type',
      
        type: 'select',
      
        placeholder: 'Input Payment Request Type',
      
        options: '[object Object]',
      
      },
      {
        
        key: 'transactionDate',
      
        label: 'Transaction Date',
      
        type: 'input',
      
        placeholder: 'Input Transaction Date',
      
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
        
        key: 'series',
      
        label: 'Series',
      
        type: 'select',
      
        placeholder: 'Input Series',
      
        options: '',
      
      },
      {
        
        key: 'modeOfPayment',
      
        label: 'Mode Of Payment',
      
        type: 'select',
      
        placeholder: 'Input Mode Of Payment',
      
        options: '',
      
      },
      {
        
        key: 'partyDetails',
      
        label: 'Party Details',
      
        type: 'input',
      
        placeholder: 'Input Party Details',
      
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
        
        key: '',
      
        label: '',
      
        type: 'input',
      
        placeholder: 'Input ',
      
        options: '',
      
      },
      {
        
        key: 'referenceDoctype',
      
        label: 'Reference Doctype',
      
        type: 'select',
      
        placeholder: 'Input Reference Doctype',
      
        options: '',
      
      },
      {
        
        key: 'referenceName',
      
        label: 'Reference Name',
      
        type: 'select',
      
        placeholder: 'Input Reference Name',
      
        options: '',
      
      },
      {
        
        key: 'transactionDetails',
      
        label: 'Transaction Details',
      
        type: 'input',
      
        placeholder: 'Input Transaction Details',
      
        options: '',
      
      },
      {
        
        key: 'amount',
      
        label: 'Amount',
      
        type: 'select',
      
        placeholder: 'Input Amount',
      
        options: '',
      
      },
      {
        
        key: 'isASubscription',
      
        label: 'Is A Subscription',
      
        type: 'input',
      
        placeholder: 'Input Is A Subscription',
      
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
        
        key: 'transactionCurrency',
      
        label: 'Transaction Currency',
      
        type: 'select',
      
        placeholder: 'Input Transaction Currency',
      
        options: '',
      
      },
      {
        
        key: 'subscriptionSection',
      
        label: 'Subscription Section',
      
        type: 'input',
      
        placeholder: 'Input Subscription Section',
      
        options: '',
      
      },
      {
        
        key: 'subscriptionPlans',
      
        label: 'Subscription Plans',
      
        type: 'select',
      
        placeholder: 'Input Subscription Plans',
      
        options: '',
      
      },
      {
        
        key: 'bankAccountDetails',
      
        label: 'Bank Account Details',
      
        type: 'input',
      
        placeholder: 'Input Bank Account Details',
      
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
        
        key: 'bank',
      
        label: 'Bank',
      
        type: 'input',
      
        placeholder: 'Input Bank',
      
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
        
        key: 'account',
      
        label: 'Account',
      
        type: 'input',
      
        placeholder: 'Input Account',
      
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
        
        key: 'recipientMessageAndPaymentDetails',
      
        label: 'Recipient Message And Payment Details',
      
        type: 'input',
      
        placeholder: 'Input Recipient Message And Payment Details',
      
        options: '',
      
      },
      {
        
        key: 'printFormat',
      
        label: 'Print Format',
      
        type: 'input',
      
        placeholder: 'Input Print Format',
      
        options: '',
      
      },
      {
        
        key: 'to',
      
        label: 'To',
      
        type: 'input',
      
        placeholder: 'Input To',
      
        options: '',
      
      },
      {
        
        key: 'subject',
      
        label: 'Subject',
      
        type: 'input',
      
        placeholder: 'Input Subject',
      
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
        
        key: 'paymentGatewayAccount',
      
        label: 'Payment Gateway Account',
      
        type: 'select',
      
        placeholder: 'Input Payment Gateway Account',
      
        options: '',
      
      },
      {
        
        key: 'status',
      
        label: 'Status',
      
        type: 'select',
      
        placeholder: 'Input Status',
      
        options: '[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]',
      
      },
      {
        
        key: 'makeSalesInvoice',
      
        label: 'Make Sales Invoice',
      
        type: 'input',
      
        placeholder: 'Input Make Sales Invoice',
      
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
        
        key: 'message',
      
        label: 'Message',
      
        type: 'input',
      
        placeholder: 'Input Message',
      
        options: '',
      
      },
      {
        
        key: 'messageExamples',
      
        label: 'Message Examples',
      
        type: 'select',
      
        placeholder: 'Input Message Examples',
      
        options: '[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]',
      
      },
      {
        
        key: 'muteEmail',
      
        label: 'Mute Email',
      
        type: 'input',
      
        placeholder: 'Input Mute Email',
      
        options: '',
      
      },
      {
        
        key: 'paymentUrl',
      
        label: 'Payment Url',
      
        type: 'input',
      
        placeholder: 'Input Payment Url',
      
        options: '',
      
      },
      {
        
        key: 'paymentGatewayDetails',
      
        label: 'Payment Gateway Details',
      
        type: 'input',
      
        placeholder: 'Input Payment Gateway Details',
      
        options: '',
      
      },
      {
        
        key: 'paymentGateway',
      
        label: 'Payment Gateway',
      
        type: 'input',
      
        placeholder: 'Input Payment Gateway',
      
        options: '',
      
      },
      {
        
        key: 'paymentAccount',
      
        label: 'Payment Account',
      
        type: 'input',
      
        placeholder: 'Input Payment Account',
      
        options: '',
      
      },
      {
        
        key: 'paymentOrder',
      
        label: 'Payment Order',
      
        type: 'select',
      
        placeholder: 'Input Payment Order',
      
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
