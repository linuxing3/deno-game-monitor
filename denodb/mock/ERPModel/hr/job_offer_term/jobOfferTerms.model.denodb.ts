// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: JobOfferTerm
|--------------------------------------------------------------------------
|
| Model Class and Interface of jobOfferTerms
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class JobOfferTerm extends Model { 
  static table = "jobOfferTerms";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    offerTerm: DataTypes.STRING,
    valueDescription: DataTypes.STRING,
    
  };

}
