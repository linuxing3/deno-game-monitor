// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: AssetCategory
|--------------------------------------------------------------------------
|
| Model Class and Interface of assetCategories
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";
import {
  ModelFields,
} from "https://deno.land/x/denodb/lib/model.ts";


export class AssetCategory extends Model { 
  static table = "assetCategories";
  static timestamps = true;
  
  static fields: ModelFields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    assetCategoryName: DataTypes.STRING,
    financeBookDetail: DataTypes.STRING,
    financeBooks: DataTypes.STRING,
    accounts: DataTypes.STRING,
    
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'assetCategoryName',
        label: 'Asset Category Name',
        type: 'input',
        placeholder: 'Input Asset Category Name',
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
        key: 'financeBookDetail',
        label: 'Finance Book Detail',
        type: 'input',
        placeholder: 'Input Finance Book Detail',
        options: '',
        
      },
      {
        key: 'financeBooks',
        label: 'Finance Books',
        type: 'select',
        placeholder: 'Input Finance Books',
        options: '',
        
      },
      {
        key: 'accounts',
        label: 'Accounts',
        type: 'input',
        placeholder: 'Input Accounts',
        options: '',
        
      },
      
    ]
  };
}
