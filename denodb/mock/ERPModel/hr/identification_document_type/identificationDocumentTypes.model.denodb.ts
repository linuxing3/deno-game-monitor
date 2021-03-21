// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: IdentificationDocumentType
|--------------------------------------------------------------------------
|
| Model Class and Interface of identificationDocumentTypes
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class IdentificationDocumentType extends Model { 
  static table = "identificationDocumentTypes";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    identificationDocumentType: DataTypes.STRING,
    
  };

}
