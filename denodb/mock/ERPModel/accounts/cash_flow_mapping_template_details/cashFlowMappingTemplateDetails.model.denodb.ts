// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: CashFlowMappingTemplateDetail
|--------------------------------------------------------------------------
|
| Model Class and Interface of cashFlowMappingTemplateDetails
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class CashFlowMappingTemplateDetail extends Model { 
  static table = "cashFlowMappingTemplateDetails";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    mapping: DataTypes.STRING,
    
  };

}
