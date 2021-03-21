// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: TimesheetDetail
|--------------------------------------------------------------------------
|
| Model Class and Interface of timesheetDetails
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("timesheetDetails")
export class TimesheetDetail extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  activityType!: string;
  
  @Field({ type: FieldType.STRING })
  fromTime!: string;
  
  @Field({ type: FieldType.STRING })
  expectedHrs!: string;
  
  @Field({ type: FieldType.STRING })
  hrs!: string;
  
  @Field({ type: FieldType.STRING })
  toTime!: string;
  
  @Field({ type: FieldType.STRING })
  completed!: string;
  
  @Field({ type: FieldType.STRING })
  completedQty!: string;
  
  @Field({ type: FieldType.STRING })
  workstation!: string;
  
  @Field({ type: FieldType.STRING })
  operation!: string;
  
  @Field({ type: FieldType.STRING })
  operationId!: string;
  
  @Field({ type: FieldType.STRING })
  project!: string;
  
  @Field({ type: FieldType.STRING })
  task!: string;
  
  @Field({ type: FieldType.STRING })
  bill!: string;
  
  @Field({ type: FieldType.STRING })
  billingHours!: string;
  
  @Field({ type: FieldType.STRING })
  billingRate!: string;
  
  @Field({ type: FieldType.STRING })
  billingAmount!: string;
  
  @Field({ type: FieldType.STRING })
  costingRate!: string;
  
  @Field({ type: FieldType.STRING })
  costingAmount!: string;
  
  @Field({ type: FieldType.STRING })
  reference!: string;
  
  @Field({ type: FieldType.STRING })
  salesInvoice!: string;
  
  
}

export interface ITimesheetDetail {
  id: number;
  activityType: string;
  fromTime: string;
  expectedHrs: string;
  hrs: string;
  toTime: string;
  completed: string;
  completedQty: string;
  workstation: string;
  operation: string;
  operationId: string;
  project: string;
  task: string;
  bill: string;
  billingHours: string;
  billingRate: string;
  billingAmount: string;
  costingRate: string;
  costingAmount: string;
  reference: string;
  salesInvoice: string;
  
}
