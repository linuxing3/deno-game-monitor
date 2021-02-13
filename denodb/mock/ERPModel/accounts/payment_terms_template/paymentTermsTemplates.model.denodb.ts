// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: PaymentTermsTemplate
|--------------------------------------------------------------------------
|
| Model Class and Interface of paymentTermsTemplates
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


export class PaymentTermsTemplate extends Model { 
  static table = "paymentTermsTemplates";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    templateName: DataTypes.STRING,
    paymentTerms: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'templateName',
        label: 'Template Name',
        type: 'input',
        placeholder: 'Input Template Name',
        options: '',
        
      },
      {
        key: 'paymentTerms',
        label: 'Payment Terms',
        type: 'select',
        placeholder: 'Input Payment Terms',
        options: '',
        
      },
      
    ]
  };
}

export interface IPaymentTermsTemplate {
  id: FieldValue;
  templateName: FieldValue;
  paymentTerms: FieldValue;
  
}
