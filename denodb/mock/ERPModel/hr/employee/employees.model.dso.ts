// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: Employee
|--------------------------------------------------------------------------
|
| Model Class and Interface of employees
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("employees")
export class Employee extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  employee!: string;
  
  @Field({ type: FieldType.STRING })
  series!: string;
  
  @Field({ type: FieldType.STRING })
  salutation!: string;
  
  @Field({ type: FieldType.STRING })
  firstName!: string;
  
  @Field({ type: FieldType.STRING })
  middleName!: string;
  
  @Field({ type: FieldType.STRING })
  lastName!: string;
  
  @Field({ type: FieldType.STRING })
  fullName!: string;
  
  @Field({ type: FieldType.STRING })
  image!: string;
  
  @Field({ type: FieldType.STRING })
  company!: string;
  
  @Field({ type: FieldType.STRING })
  status!: string;
  
  @Field({ type: FieldType.STRING })
  employeeNumber!: string;
  
  @Field({ type: FieldType.STRING })
  employmentType!: string;
  
  @Field({ type: FieldType.STRING })
  gender!: string;
  
  @Field({ type: FieldType.STRING })
  dateOfBirth!: string;
  
  @Field({ type: FieldType.STRING })
  dateOfJoining!: string;
  
  @Field({ type: FieldType.STRING })
  emergencyContact!: string;
  
  @Field({ type: FieldType.STRING })
  emergencyPhone!: string;
  
  @Field({ type: FieldType.STRING })
  relation!: string;
  
  @Field({ type: FieldType.STRING })
  jobApplicant!: string;
  
  @Field({ type: FieldType.STRING })
  offerDate!: string;
  
  @Field({ type: FieldType.STRING })
  confirmationDate!: string;
  
  @Field({ type: FieldType.STRING })
  contractEndDate!: string;
  
  @Field({ type: FieldType.STRING })
  noticeDays!: string;
  
  @Field({ type: FieldType.STRING })
  dateOfRetirement!: string;
  
  @Field({ type: FieldType.STRING })
  department!: string;
  
  @Field({ type: FieldType.STRING })
  designation!: string;
  
  @Field({ type: FieldType.STRING })
  reportsTo!: string;
  
  @Field({ type: FieldType.STRING })
  grade!: string;
  
  @Field({ type: FieldType.STRING })
  branch!: string;
  
  @Field({ type: FieldType.STRING })
  leavePolicy!: string;
  
  @Field({ type: FieldType.STRING })
  holidayList!: string;
  
  @Field({ type: FieldType.STRING })
  salaryMode!: string;
  
  @Field({ type: FieldType.STRING })
  bankName!: string;
  
  @Field({ type: FieldType.STRING })
  bankACNo!: string;
  
  @Field({ type: FieldType.STRING })
  healthInsurance!: string;
  
  @Field({ type: FieldType.STRING })
  healthInsuranceProvider!: string;
  
  @Field({ type: FieldType.STRING })
  healthInsuranceNo!: string;
  
  @Field({ type: FieldType.STRING })
  mobile!: string;
  
  @Field({ type: FieldType.STRING })
  preferedContactEmail!: string;
  
  @Field({ type: FieldType.STRING })
  preferedEmail!: string;
  
  @Field({ type: FieldType.STRING })
  companyEmail!: string;
  
  @Field({ type: FieldType.STRING })
  personalEmail!: string;
  
  @Field({ type: FieldType.STRING })
  unsubscribed!: string;
  
  @Field({ type: FieldType.STRING })
  permanentAddressIs!: string;
  
  @Field({ type: FieldType.STRING })
  permanentAddress!: string;
  
  @Field({ type: FieldType.STRING })
  currentAddressIs!: string;
  
  @Field({ type: FieldType.STRING })
  currentAddress!: string;
  
  @Field({ type: FieldType.STRING })
  bioCoverLetter!: string;
  
  @Field({ type: FieldType.STRING })
  passportNumber!: string;
  
  @Field({ type: FieldType.STRING })
  dateOfIssue!: string;
  
  @Field({ type: FieldType.STRING })
  validUpto!: string;
  
  @Field({ type: FieldType.STRING })
  placeOfIssue!: string;
  
  @Field({ type: FieldType.STRING })
  maritalStatus!: string;
  
  @Field({ type: FieldType.STRING })
  bloodGroup!: string;
  
  @Field({ type: FieldType.STRING })
  familyBackground!: string;
  
  @Field({ type: FieldType.STRING })
  healthDetails!: string;
  
  @Field({ type: FieldType.STRING })
  educationalQualification!: string;
  
  @Field({ type: FieldType.STRING })
  education!: string;
  
  @Field({ type: FieldType.STRING })
  previousWorkExperience!: string;
  
  @Field({ type: FieldType.STRING })
  externalWorkHistory!: string;
  
  @Field({ type: FieldType.STRING })
  historyInCompany!: string;
  
  @Field({ type: FieldType.STRING })
  internalWorkHistory!: string;
  
  @Field({ type: FieldType.STRING })
  resignationLetterDate!: string;
  
  @Field({ type: FieldType.STRING })
  relievingDate!: string;
  
  @Field({ type: FieldType.STRING })
  reasonForLeaving!: string;
  
  @Field({ type: FieldType.STRING })
  leaveEncashed!: string;
  
  @Field({ type: FieldType.STRING })
  encashmentDate!: string;
  
  @Field({ type: FieldType.STRING })
  exitInterviewDetails!: string;
  
  @Field({ type: FieldType.STRING })
  heldOn!: string;
  
  @Field({ type: FieldType.STRING })
  reasonForResignation!: string;
  
  @Field({ type: FieldType.STRING })
  newWorkplace!: string;
  
  @Field({ type: FieldType.STRING })
  feedback!: string;
  
  @Field({ type: FieldType.STRING })
  lft!: string;
  
  @Field({ type: FieldType.STRING })
  rgt!: string;
  
  @Field({ type: FieldType.STRING })
  oldParent!: string;
  
  
}

export interface IEmployee {
  id: number;
  employee: string;
  series: string;
  salutation: string;
  firstName: string;
  middleName: string;
  lastName: string;
  fullName: string;
  image: string;
  company: string;
  status: string;
  employeeNumber: string;
  employmentType: string;
  gender: string;
  dateOfBirth: string;
  dateOfJoining: string;
  emergencyContact: string;
  emergencyPhone: string;
  relation: string;
  jobApplicant: string;
  offerDate: string;
  confirmationDate: string;
  contractEndDate: string;
  noticeDays: string;
  dateOfRetirement: string;
  department: string;
  designation: string;
  reportsTo: string;
  grade: string;
  branch: string;
  leavePolicy: string;
  holidayList: string;
  salaryMode: string;
  bankName: string;
  bankACNo: string;
  healthInsurance: string;
  healthInsuranceProvider: string;
  healthInsuranceNo: string;
  mobile: string;
  preferedContactEmail: string;
  preferedEmail: string;
  companyEmail: string;
  personalEmail: string;
  unsubscribed: string;
  permanentAddressIs: string;
  permanentAddress: string;
  currentAddressIs: string;
  currentAddress: string;
  bioCoverLetter: string;
  passportNumber: string;
  dateOfIssue: string;
  validUpto: string;
  placeOfIssue: string;
  maritalStatus: string;
  bloodGroup: string;
  familyBackground: string;
  healthDetails: string;
  educationalQualification: string;
  education: string;
  previousWorkExperience: string;
  externalWorkHistory: string;
  historyInCompany: string;
  internalWorkHistory: string;
  resignationLetterDate: string;
  relievingDate: string;
  reasonForLeaving: string;
  leaveEncashed: string;
  encashmentDate: string;
  exitInterviewDetails: string;
  heldOn: string;
  reasonForResignation: string;
  newWorkplace: string;
  feedback: string;
  lft: string;
  rgt: string;
  oldParent: string;
  
}
