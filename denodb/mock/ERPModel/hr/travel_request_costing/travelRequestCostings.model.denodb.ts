// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: TravelRequestCosting
|--------------------------------------------------------------------------
|
| Model Class and Interface of travelRequestCostings
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class TravelRequestCosting extends Model { 
  static table = "travelRequestCostings";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    expenseType: DataTypes.STRING,
    sponsoredAmount: DataTypes.STRING,
    fundedAmount: DataTypes.STRING,
    totalAmount: DataTypes.STRING,
    comments: DataTypes.STRING,
    
  };

}
