// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: Budget
|--------------------------------------------------------------------------
|
| Model Class and Interface of budgets
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("budgets")
export class Budget extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  budgetAgainst!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  costCenter!: string;
  
  @Field({ type: FieldType.STRING })
  project!: string;
  
  @Field({ type: FieldType.STRING })
  fiscalYear!: string;
  
  @Field({ type: FieldType.STRING })
  monthlyDistribution!: string;
  
  @Field({ type: FieldType.STRING })
  amendedFrom!: string;
  
  @Field({ type: FieldType.STRING })
  controlAction!: string;
  
  @Field({ type: FieldType.STRING })
  applicableOnMaterialRequest!: string;
  
  @Field({ type: FieldType.STRING })
  actionIfAnnualBudgetExceededOnMr!: string;
  
  @Field({ type: FieldType.STRING })
  actionIfAccumulatedMonthlyBudgetExceededOnMr!: string;
  
  @Field({ type: FieldType.STRING })
  applicableOnPurchaseOrder!: string;
  
  @Field({ type: FieldType.STRING })
  actionIfAnnualBudgetExceededOnPo!: string;
  
  @Field({ type: FieldType.STRING })
  actionIfAccumulatedMonthlyBudgetExceededOnPo!: string;
  
  @Field({ type: FieldType.STRING })
  applicableOnBookingActualExpenses!: string;
  
  @Field({ type: FieldType.STRING })
  actionIfAnnualBudgetExceededOnActual!: string;
  
  @Field({ type: FieldType.STRING })
  actionIfAccumulatedMonthlyBudgetExceededOnActual!: string;
  
  @Field({ type: FieldType.STRING })
  budgetAccounts!: string;
  
  
}

export interface IBudget {
  id: number;
  budgetAgainst: string;
  company: string;
  costCenter: string;
  project: string;
  fiscalYear: string;
  monthlyDistribution: string;
  amendedFrom: string;
  controlAction: string;
  applicableOnMaterialRequest: string;
  actionIfAnnualBudgetExceededOnMr: string;
  actionIfAccumulatedMonthlyBudgetExceededOnMr: string;
  applicableOnPurchaseOrder: string;
  actionIfAnnualBudgetExceededOnPo: string;
  actionIfAccumulatedMonthlyBudgetExceededOnPo: string;
  applicableOnBookingActualExpenses: string;
  actionIfAnnualBudgetExceededOnActual: string;
  actionIfAccumulatedMonthlyBudgetExceededOnActual: string;
  budgetAccounts: string;
  
}
