// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: Vehicle
|--------------------------------------------------------------------------
|
| Model Class and Interface of vehicles
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("vehicles")
export class Vehicle extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  licensePlate!: string;
  
  @Field({ type: FieldType.STRING })
  make!: string;
  
  @Field({ type: FieldType.STRING })
  model!: string;
  
  @Field({ type: FieldType.STRING })
  details!: string;
  
  @Field({ type: FieldType.STRING })
  odometerValueLast!: string;
  
  @Field({ type: FieldType.STRING })
  acquisitionDate!: string;
  
  @Field({ type: FieldType.STRING })
  location!: string;
  
  @Field({ type: FieldType.STRING })
  chassisNo!: string;
  
  @Field({ type: FieldType.STRING })
  vehicleValue!: string;
  
  @Field({ type: FieldType.STRING })
  employee!: string;
  
  @Field({ type: FieldType.STRING })
  insuranceDetails!: string;
  
  @Field({ type: FieldType.STRING })
  insuranceCompany!: string;
  
  @Field({ type: FieldType.STRING })
  policyNo!: string;
  
  @Field({ type: FieldType.STRING })
  startDate!: string;
  
  @Field({ type: FieldType.STRING })
  endDate!: string;
  
  @Field({ type: FieldType.STRING })
  additionalDetails!: string;
  
  @Field({ type: FieldType.STRING })
  fuelType!: string;
  
  @Field({ type: FieldType.STRING })
  fuelUom!: string;
  
  @Field({ type: FieldType.STRING })
  lastCarbonCheck!: string;
  
  @Field({ type: FieldType.STRING })
  color!: string;
  
  @Field({ type: FieldType.STRING })
  wheels!: string;
  
  @Field({ type: FieldType.STRING })
  doors!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  
}

export interface IVehicle {
  id: number;
  licensePlate: string;
  make: string;
  model: string;
  details: string;
  odometerValueLast: string;
  acquisitionDate: string;
  location: string;
  chassisNo: string;
  vehicleValue: string;
  employee: string;
  insuranceDetails: string;
  insuranceCompany: string;
  policyNo: string;
  startDate: string;
  endDate: string;
  additionalDetails: string;
  fuelType: string;
  fuelUom: string;
  lastCarbonCheck: string;
  color: string;
  wheels: string;
  doors: string;
  amendedFrom: string;
  
}
