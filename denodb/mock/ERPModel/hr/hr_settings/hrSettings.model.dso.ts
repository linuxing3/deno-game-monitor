// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: HrSetting
|--------------------------------------------------------------------------
|
| Model Class and Interface of hrSettings
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("hrSettings")
export class HrSetting extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  employeeSettings!: string;
  
  @Field({ type: FieldType.STRING })
  retirementAge!: string;
  
  @Field({ type: FieldType.STRING })
  employeeRecordsToBeCreatedBy!: string;
  
  @Field({ type: FieldType.STRING })
  leaveApprovalNotificationTemplate!: string;
  
  @Field({ type: FieldType.STRING })
  leaveStatusNotificationTemplate!: string;
  
  @Field({ type: FieldType.STRING })
  stopBirthdayReminders!: string;
  
  @Field({ type: FieldType.STRING })
  maintainBillingHoursAndWorkingHoursSameOnTimesheet!: string;
  
  @Field({ type: FieldType.STRING })
  leaveApproverMandatoryInLeaveApplication!: string;
  
  @Field({ type: FieldType.STRING })
  expenseApproverMandatoryInExpenseClaim!: string;
  
  @Field({ type: FieldType.STRING })
  payrollSettings!: string;
  
  @Field({ type: FieldType.STRING })
  includeHolidaysInTotalNoOfWorkingDays!: string;
  
  @Field({ type: FieldType.STRING })
  emailSalarySlipToEmployee!: string;
  
  @Field({ type: FieldType.STRING })
  maxWorkingHoursAgainstTimesheet!: string;
  
  @Field({ type: FieldType.STRING })
  leaveSettings!: string;
  
  @Field({ type: FieldType.STRING })
  showLeavesOfAllDepartmentMembersInCalendar!: string;
  
  
}

export interface IHrSetting {
  id: number;
  employeeSettings: string;
  retirementAge: string;
  employeeRecordsToBeCreatedBy: string;
  leaveApprovalNotificationTemplate: string;
  leaveStatusNotificationTemplate: string;
  stopBirthdayReminders: string;
  maintainBillingHoursAndWorkingHoursSameOnTimesheet: string;
  leaveApproverMandatoryInLeaveApplication: string;
  expenseApproverMandatoryInExpenseClaim: string;
  payrollSettings: string;
  includeHolidaysInTotalNoOfWorkingDays: string;
  emailSalarySlipToEmployee: string;
  maxWorkingHoursAgainstTimesheet: string;
  leaveSettings: string;
  showLeavesOfAllDepartmentMembersInCalendar: string;
  
}
