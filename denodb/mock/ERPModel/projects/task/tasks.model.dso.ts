// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: Task
|--------------------------------------------------------------------------
|
| Model Class and Interface of tasks
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("tasks")
export class Task extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  subject!: string;
  
  @Field({ type: FieldType.STRING })
  project!: string;
  
  @Field({ type: FieldType.STRING })
  isGroup!: string;
  
  @Field({ type: FieldType.STRING })
  status!: string;
  
  @Field({ type: FieldType.STRING })
  priority!: string;
  
  @Field({ type: FieldType.STRING })
  parentTask!: string;
  
  @Field({ type: FieldType.STRING })
  expectedStartDate!: string;
  
  @Field({ type: FieldType.STRING })
  expectedTimeInHours!: string;
  
  @Field({ type: FieldType.STRING })
  weight!: string;
  
  @Field({ type: FieldType.STRING })
  expectedEndDate!: string;
  
  @Field({ type: FieldType.STRING })
  progress!: string;
  
  @Field({ type: FieldType.STRING })
  isMilestone!: string;
  
  @Field({ type: FieldType.STRING })
  color!: string;
  
  @Field({ type: FieldType.STRING })
  details!: string;
  
  @Field({ type: FieldType.STRING })
  dependsOn!: string;
  
  @Field({ type: FieldType.STRING })
  dependsOnTasks!: string;
  
  @Field({ type: FieldType.STRING })
  actualStartDateViaTimeSheet!: string;
  
  @Field({ type: FieldType.STRING })
  actualTimeInHours!: string;
  
  @Field({ type: FieldType.STRING })
  actualEndDateViaTimeSheet!: string;
  
  @Field({ type: FieldType.STRING })
  totalCostingAmountViaTimeSheet!: string;
  
  @Field({ type: FieldType.STRING })
  totalExpenseClaimViaExpenseClaim!: string;
  
  @Field({ type: FieldType.STRING })
  totalBillingAmountViaTimeSheet!: string;
  
  @Field({ type: FieldType.STRING })
  reviewDate!: string;
  
  @Field({ type: FieldType.STRING })
  closingDate!: string;
  
  @Field({ type: FieldType.STRING })
  department!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  lft!: string;
  
  @Field({ type: FieldType.STRING })
  rgt!: string;
  
  @Field({ type: FieldType.STRING })
  oldParent!: string;
  
  
}

export interface ITask {
  id: number;
  subject: string;
  project: string;
  isGroup: string;
  status: string;
  priority: string;
  parentTask: string;
  expectedStartDate: string;
  expectedTimeInHours: string;
  weight: string;
  expectedEndDate: string;
  progress: string;
  isMilestone: string;
  color: string;
  details: string;
  dependsOn: string;
  dependsOnTasks: string;
  actualStartDateViaTimeSheet: string;
  actualTimeInHours: string;
  actualEndDateViaTimeSheet: string;
  totalCostingAmountViaTimeSheet: string;
  totalExpenseClaimViaExpenseClaim: string;
  totalBillingAmountViaTimeSheet: string;
  reviewDate: string;
  closingDate: string;
  department: string;
  company: string;
  lft: string;
  rgt: string;
  oldParent: string;
  
}
