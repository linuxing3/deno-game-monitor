// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: VehicleService
|--------------------------------------------------------------------------
|
| Model Class and Interface of vehicleServices
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("vehicleServices")
export class VehicleService extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  serviceItem!: string;
  
  @Field({ type: FieldType.STRING })
  type!: string;
  
  @Field({ type: FieldType.STRING })
  frequency!: string;
  
  @Field({ type: FieldType.STRING })
  expense!: string;
  
  
}

export interface IVehicleService {
  id: number;
  serviceItem: string;
  type: string;
  frequency: string;
  expense: string;
  
}
