// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: Shareholder
|--------------------------------------------------------------------------
|
| Model Class and Interface of shareholders
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class Shareholder extends Model { 
  static table = "shareholders";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    folioNo: DataTypes.STRING,
    company: DataTypes.STRING,
    isCompany: DataTypes.STRING,
    addressAndContacts: DataTypes.STRING,
    addressHtml: DataTypes.STRING,
    contactHtml: DataTypes.STRING,
    shareBalance: DataTypes.STRING,
    contactList: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'title',
        label: 'Title',
        type: 'input',
        placeholder: 'Input Title',
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
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'folioNo',
        label: 'Folio No',
        type: 'input',
        placeholder: 'Input Folio No',
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
        key: 'company',
        label: 'Company',
        type: 'select',
        placeholder: 'Input Company',
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
        key: 'addressAndContacts',
        label: 'Address And Contacts',
        type: 'select',
        placeholder: 'Input Address And Contacts',
        options: '',
        
      },
      {
        key: 'addressHtml',
        label: 'Address Html',
        type: 'input',
        placeholder: 'Input Address Html',
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
        key: 'contactHtml',
        label: 'Contact Html',
        type: 'input',
        placeholder: 'Input Contact Html',
        options: '',
        
      },
      {
        key: 'shareBalance',
        label: 'Share Balance',
        type: 'input',
        placeholder: 'Input Share Balance',
        options: '',
        
      },
      {
        key: 'contactList',
        label: 'Contact List',
        type: 'input',
        placeholder: 'Input Contact List',
        options: '',
        
      },
      
    ]
  };
}
