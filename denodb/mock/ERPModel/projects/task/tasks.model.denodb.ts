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
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class Task extends Model { 
  static table = "tasks";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    subject: DataTypes.STRING,
    project: DataTypes.STRING,
    isGroup: DataTypes.STRING,
    status: DataTypes.STRING,
    priority: DataTypes.STRING,
    parentTask: DataTypes.STRING,
    expectedStartDate: DataTypes.STRING,
    expectedTimeInHours: DataTypes.STRING,
    weight: DataTypes.STRING,
    expectedEndDate: DataTypes.STRING,
    progress: DataTypes.STRING,
    isMilestone: DataTypes.STRING,
    color: DataTypes.STRING,
    details: DataTypes.STRING,
    dependsOn: DataTypes.STRING,
    dependsOnTasks: DataTypes.STRING,
    actualStartDateViaTimeSheet: DataTypes.STRING,
    actualTimeInHours: DataTypes.STRING,
    actualEndDateViaTimeSheet: DataTypes.STRING,
    totalCostingAmountViaTimeSheet: DataTypes.STRING,
    totalExpenseClaimViaExpenseClaim: DataTypes.STRING,
    totalBillingAmountViaTimeSheet: DataTypes.STRING,
    reviewDate: DataTypes.STRING,
    closingDate: DataTypes.STRING,
    department: DataTypes.STRING,
    company: DataTypes.STRING,
    lft: DataTypes.STRING,
    rgt: DataTypes.STRING,
    oldParent: DataTypes.STRING,
    
  };

}
