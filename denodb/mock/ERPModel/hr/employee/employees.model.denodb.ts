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
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class Employee extends Model { 
  static table = "employees";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    employee: DataTypes.STRING,
    series: DataTypes.STRING,
    salutation: DataTypes.STRING,
    firstName: DataTypes.STRING,
    middleName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    fullName: DataTypes.STRING,
    image: DataTypes.STRING,
    company: DataTypes.STRING,
    status: DataTypes.STRING,
    employeeNumber: DataTypes.STRING,
    employmentType: DataTypes.STRING,
    gender: DataTypes.STRING,
    dateOfBirth: DataTypes.STRING,
    dateOfJoining: DataTypes.STRING,
    emergencyContact: DataTypes.STRING,
    emergencyPhone: DataTypes.STRING,
    relation: DataTypes.STRING,
    jobApplicant: DataTypes.STRING,
    offerDate: DataTypes.STRING,
    confirmationDate: DataTypes.STRING,
    contractEndDate: DataTypes.STRING,
    noticeDays: DataTypes.STRING,
    dateOfRetirement: DataTypes.STRING,
    department: DataTypes.STRING,
    designation: DataTypes.STRING,
    reportsTo: DataTypes.STRING,
    grade: DataTypes.STRING,
    branch: DataTypes.STRING,
    leavePolicy: DataTypes.STRING,
    holidayList: DataTypes.STRING,
    salaryMode: DataTypes.STRING,
    bankName: DataTypes.STRING,
    bankACNo: DataTypes.STRING,
    healthInsurance: DataTypes.STRING,
    healthInsuranceProvider: DataTypes.STRING,
    healthInsuranceNo: DataTypes.STRING,
    mobile: DataTypes.STRING,
    preferedContactEmail: DataTypes.STRING,
    preferedEmail: DataTypes.STRING,
    companyEmail: DataTypes.STRING,
    personalEmail: DataTypes.STRING,
    unsubscribed: DataTypes.STRING,
    permanentAddressIs: DataTypes.STRING,
    permanentAddress: DataTypes.STRING,
    currentAddressIs: DataTypes.STRING,
    currentAddress: DataTypes.STRING,
    bioCoverLetter: DataTypes.STRING,
    passportNumber: DataTypes.STRING,
    dateOfIssue: DataTypes.STRING,
    validUpto: DataTypes.STRING,
    placeOfIssue: DataTypes.STRING,
    maritalStatus: DataTypes.STRING,
    bloodGroup: DataTypes.STRING,
    familyBackground: DataTypes.STRING,
    healthDetails: DataTypes.STRING,
    educationalQualification: DataTypes.STRING,
    education: DataTypes.STRING,
    previousWorkExperience: DataTypes.STRING,
    externalWorkHistory: DataTypes.STRING,
    historyInCompany: DataTypes.STRING,
    internalWorkHistory: DataTypes.STRING,
    resignationLetterDate: DataTypes.STRING,
    relievingDate: DataTypes.STRING,
    reasonForLeaving: DataTypes.STRING,
    leaveEncashed: DataTypes.STRING,
    encashmentDate: DataTypes.STRING,
    exitInterviewDetails: DataTypes.STRING,
    heldOn: DataTypes.STRING,
    reasonForResignation: DataTypes.STRING,
    newWorkplace: DataTypes.STRING,
    feedback: DataTypes.STRING,
    lft: DataTypes.STRING,
    rgt: DataTypes.STRING,
    oldParent: DataTypes.STRING,
    
  };

}
