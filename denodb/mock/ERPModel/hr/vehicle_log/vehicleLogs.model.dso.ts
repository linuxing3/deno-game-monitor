// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: VehicleLog
|--------------------------------------------------------------------------
|
| Model Class and Interface of vehicleLogs
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("vehicleLogs")
export class VehicleLog extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  series!: string;
  
  @Field({ type: FieldType.STRING })
  licensePlate!: string;
  
  @Field({ type: FieldType.STRING })
  employee!: string;
  
  @Field({ type: FieldType.STRING })
  model!: string;
  
  @Field({ type: FieldType.STRING })
  make!: string;
  
  @Field({ type: FieldType.STRING })
  odometerReading!: string;
  
  @Field({ type: FieldType.STRING })
  date!: string;
  
  @Field({ type: FieldType.STRING })
  odometer!: string;
  
  @Field({ type: FieldType.STRING })
  refuellingDetails!: string;
  
  @Field({ type: FieldType.STRING })
  fuelQty!: string;
  
  @Field({ type: FieldType.STRING })
  fuelPrice!: string;
  
  @Field({ type: FieldType.STRING })
  supplier!: string;
  
  @Field({ type: FieldType.STRING })
  invoiceRef!: string;
  
  @Field({ type: FieldType.STRING })
  serviceDetails!: string;
  
  @Field({ type: FieldType.STRING })
  serviceDetail!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  
}

export interface IVehicleLog {
  id: number;
  series: string;
  licensePlate: string;
  employee: string;
  model: string;
  make: string;
  odometerReading: string;
  date: string;
  odometer: string;
  refuellingDetails: string;
  fuelQty: string;
  fuelPrice: string;
  supplier: string;
  invoiceRef: string;
  serviceDetails: string;
  serviceDetail: string;
  amendedFrom: string;
  
}
