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
import {
  ModelFields,
} from "https://deno.land/x/denodb/lib/model.ts";


export class Employee extends Model { 
  static table = "employees";
  static timestamps = true;
  
  static fields: ModelFields = {
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

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'employee',
        label: 'Employee',
        type: 'input',
        placeholder: 'Input Employee',
        options: '',
        
      },
      {
        key: 'series',
        label: 'Series',
        type: 'select',
        placeholder: 'Input Series',
        options: '',
        
      },
      {
        key: 'salutation',
        label: 'Salutation',
        type: 'select',
        placeholder: 'Input Salutation',
        options: '',
        
      },
      {
        key: 'firstName',
        label: 'First Name',
        type: 'input',
        placeholder: 'Input First Name',
        options: '',
        
      },
      {
        key: 'middleName',
        label: 'Middle Name',
        type: 'input',
        placeholder: 'Input Middle Name',
        options: '',
        
      },
      {
        key: 'lastName',
        label: 'Last Name',
        type: 'input',
        placeholder: 'Input Last Name',
        options: '',
        
      },
      {
        key: 'fullName',
        label: 'Full Name',
        type: 'input',
        placeholder: 'Input Full Name',
        options: '',
        
      },
      {
        key: 'image',
        label: 'Image',
        type: 'input',
        placeholder: 'Input Image',
        options: '',
        
      },
      {
        key: 'company',
        label: 'Company',
        type: 'select',
        placeholder: 'Input Company',
        options: '',
        
      },
      {
        key: 'status',
        label: 'Status',
        type: 'select',
        placeholder: 'Input Status',
        options: '[object Object],[object Object]',
        
      },
      {
        key: 'employeeNumber',
        label: 'Employee Number',
        type: 'input',
        placeholder: 'Input Employee Number',
        options: '',
        
      },
      {
        key: 'employmentType',
        label: 'Employment Type',
        type: 'select',
        placeholder: 'Input Employment Type',
        options: '',
        
      },
      {
        key: 'gender',
        label: 'Gender',
        type: 'select',
        placeholder: 'Input Gender',
        options: '',
        
      },
      {
        key: 'dateOfBirth',
        label: 'Date Of Birth',
        type: 'input',
        placeholder: 'Input Date Of Birth',
        options: '',
        
      },
      {
        key: 'dateOfJoining',
        label: 'Date Of Joining',
        type: 'input',
        placeholder: 'Input Date Of Joining',
        options: '',
        
      },
      {
        key: 'emergencyContact',
        label: 'Emergency Contact',
        type: 'input',
        placeholder: 'Input Emergency Contact',
        options: '',
        
      },
      {
        key: 'emergencyPhone',
        label: 'Emergency Phone',
        type: 'input',
        placeholder: 'Input Emergency Phone',
        options: '',
        
      },
      {
        key: 'relation',
        label: 'Relation',
        type: 'input',
        placeholder: 'Input Relation',
        options: '',
        
      },
      {
        key: 'jobApplicant',
        label: 'Job Applicant',
        type: 'select',
        placeholder: 'Input Job Applicant',
        options: '',
        
      },
      {
        key: 'offerDate',
        label: 'Offer Date',
        type: 'input',
        placeholder: 'Input Offer Date',
        options: '',
        
      },
      {
        key: 'confirmationDate',
        label: 'Confirmation Date',
        type: 'input',
        placeholder: 'Input Confirmation Date',
        options: '',
        
      },
      {
        key: 'contractEndDate',
        label: 'Contract End Date',
        type: 'input',
        placeholder: 'Input Contract End Date',
        options: '',
        
      },
      {
        key: 'noticeDays',
        label: 'Notice Days',
        type: 'input',
        placeholder: 'Input Notice Days',
        options: '',
        
      },
      {
        key: 'dateOfRetirement',
        label: 'Date Of Retirement',
        type: 'input',
        placeholder: 'Input Date Of Retirement',
        options: '',
        
      },
      {
        key: 'department',
        label: 'Department',
        type: 'select',
        placeholder: 'Input Department',
        options: '',
        
      },
      {
        key: 'designation',
        label: 'Designation',
        type: 'select',
        placeholder: 'Input Designation',
        options: '',
        
      },
      {
        key: 'reportsTo',
        label: 'Reports To',
        type: 'select',
        placeholder: 'Input Reports To',
        options: '',
        
      },
      {
        key: 'grade',
        label: 'Grade',
        type: 'select',
        placeholder: 'Input Grade',
        options: '',
        
      },
      {
        key: 'branch',
        label: 'Branch',
        type: 'select',
        placeholder: 'Input Branch',
        options: '',
        
      },
      {
        key: 'leavePolicy',
        label: 'Leave Policy',
        type: 'select',
        placeholder: 'Input Leave Policy',
        options: '',
        
      },
      {
        key: 'holidayList',
        label: 'Holiday List',
        type: 'select',
        placeholder: 'Input Holiday List',
        options: '',
        
      },
      {
        key: 'salaryMode',
        label: 'Salary Mode',
        type: 'select',
        placeholder: 'Input Salary Mode',
        options: '[object Object],[object Object],[object Object]',
        
      },
      {
        key: 'bankName',
        label: 'Bank Name',
        type: 'input',
        placeholder: 'Input Bank Name',
        options: '',
        
      },
      {
        key: 'bankACNo',
        label: 'Bank A C No',
        type: 'input',
        placeholder: 'Input Bank A C No',
        options: '',
        
      },
      {
        key: 'healthInsurance',
        label: 'Health Insurance',
        type: 'input',
        placeholder: 'Input Health Insurance',
        options: '',
        
      },
      {
        key: 'healthInsuranceProvider',
        label: 'Health Insurance Provider',
        type: 'select',
        placeholder: 'Input Health Insurance Provider',
        options: '',
        
      },
      {
        key: 'healthInsuranceNo',
        label: 'Health Insurance No',
        type: 'input',
        placeholder: 'Input Health Insurance No',
        options: '',
        
      },
      {
        key: 'mobile',
        label: 'Mobile',
        type: 'input',
        placeholder: 'Input Mobile',
        options: '',
        
      },
      {
        key: 'preferedContactEmail',
        label: 'Prefered Contact Email',
        type: 'select',
        placeholder: 'Input Prefered Contact Email',
        options: '[object Object],[object Object],[object Object]',
        
      },
      {
        key: 'preferedEmail',
        label: 'Prefered Email',
        type: 'select',
        placeholder: 'Input Prefered Email',
        options: '',
        
      },
      {
        key: 'companyEmail',
        label: 'Company Email',
        type: 'select',
        placeholder: 'Input Company Email',
        options: '',
        
      },
      {
        key: 'personalEmail',
        label: 'Personal Email',
        type: 'select',
        placeholder: 'Input Personal Email',
        options: '',
        
      },
      {
        key: 'unsubscribed',
        label: 'Unsubscribed',
        type: 'input',
        placeholder: 'Input Unsubscribed',
        options: '',
        
      },
      {
        key: 'permanentAddressIs',
        label: 'Permanent Address Is',
        type: 'select',
        placeholder: 'Input Permanent Address Is',
        options: '[object Object],[object Object]',
        
      },
      {
        key: 'permanentAddress',
        label: 'Permanent Address',
        type: 'input',
        placeholder: 'Input Permanent Address',
        options: '',
        
      },
      {
        key: 'currentAddressIs',
        label: 'Current Address Is',
        type: 'select',
        placeholder: 'Input Current Address Is',
        options: '[object Object],[object Object]',
        
      },
      {
        key: 'currentAddress',
        label: 'Current Address',
        type: 'input',
        placeholder: 'Input Current Address',
        options: '',
        
      },
      {
        key: 'bioCoverLetter',
        label: 'Bio Cover Letter',
        type: 'input',
        placeholder: 'Input Bio Cover Letter',
        options: '',
        
      },
      {
        key: 'passportNumber',
        label: 'Passport Number',
        type: 'input',
        placeholder: 'Input Passport Number',
        options: '',
        
      },
      {
        key: 'dateOfIssue',
        label: 'Date Of Issue',
        type: 'input',
        placeholder: 'Input Date Of Issue',
        options: '',
        
      },
      {
        key: 'validUpto',
        label: 'Valid Upto',
        type: 'input',
        placeholder: 'Input Valid Upto',
        options: '',
        
      },
      {
        key: 'placeOfIssue',
        label: 'Place Of Issue',
        type: 'input',
        placeholder: 'Input Place Of Issue',
        options: '',
        
      },
      {
        key: 'maritalStatus',
        label: 'Marital Status',
        type: 'select',
        placeholder: 'Input Marital Status',
        options: '[object Object],[object Object],[object Object],[object Object]',
        
      },
      {
        key: 'bloodGroup',
        label: 'Blood Group',
        type: 'select',
        placeholder: 'Input Blood Group',
        options: '[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]',
        
      },
      {
        key: 'familyBackground',
        label: 'Family Background',
        type: 'input',
        placeholder: 'Input Family Background',
        options: '',
        
      },
      {
        key: 'healthDetails',
        label: 'Health Details',
        type: 'input',
        placeholder: 'Input Health Details',
        options: '',
        
      },
      {
        key: 'educationalQualification',
        label: 'Educational Qualification',
        type: 'input',
        placeholder: 'Input Educational Qualification',
        options: '',
        
      },
      {
        key: 'education',
        label: 'Education',
        type: 'select',
        placeholder: 'Input Education',
        options: '',
        
      },
      {
        key: 'previousWorkExperience',
        label: 'Previous Work Experience',
        type: 'select',
        placeholder: 'Input Previous Work Experience',
        options: '',
        
      },
      {
        key: 'externalWorkHistory',
        label: 'External Work History',
        type: 'select',
        placeholder: 'Input External Work History',
        options: '',
        
      },
      {
        key: 'historyInCompany',
        label: 'History In Company',
        type: 'select',
        placeholder: 'Input History In Company',
        options: '',
        
      },
      {
        key: 'internalWorkHistory',
        label: 'Internal Work History',
        type: 'select',
        placeholder: 'Input Internal Work History',
        options: '',
        
      },
      {
        key: 'resignationLetterDate',
        label: 'Resignation Letter Date',
        type: 'input',
        placeholder: 'Input Resignation Letter Date',
        options: '',
        
      },
      {
        key: 'relievingDate',
        label: 'Relieving Date',
        type: 'input',
        placeholder: 'Input Relieving Date',
        options: '',
        
      },
      {
        key: 'reasonForLeaving',
        label: 'Reason For Leaving',
        type: 'input',
        placeholder: 'Input Reason For Leaving',
        options: '',
        
      },
      {
        key: 'leaveEncashed',
        label: 'Leave Encashed',
        type: 'select',
        placeholder: 'Input Leave Encashed',
        options: '[object Object],[object Object]',
        
      },
      {
        key: 'encashmentDate',
        label: 'Encashment Date',
        type: 'input',
        placeholder: 'Input Encashment Date',
        options: '',
        
      },
      {
        key: 'exitInterviewDetails',
        label: 'Exit Interview Details',
        type: 'input',
        placeholder: 'Input Exit Interview Details',
        options: '',
        
      },
      {
        key: 'heldOn',
        label: 'Held On',
        type: 'input',
        placeholder: 'Input Held On',
        options: '',
        
      },
      {
        key: 'reasonForResignation',
        label: 'Reason For Resignation',
        type: 'select',
        placeholder: 'Input Reason For Resignation',
        options: '[object Object],[object Object]',
        
      },
      {
        key: 'newWorkplace',
        label: 'New Workplace',
        type: 'input',
        placeholder: 'Input New Workplace',
        options: '',
        
      },
      {
        key: 'feedback',
        label: 'Feedback',
        type: 'input',
        placeholder: 'Input Feedback',
        options: '',
        
      },
      {
        key: 'lft',
        label: 'Lft',
        type: 'input',
        placeholder: 'Input Lft',
        options: '',
        
      },
      {
        key: 'rgt',
        label: 'Rgt',
        type: 'input',
        placeholder: 'Input Rgt',
        options: '',
        
      },
      {
        key: 'oldParent',
        label: 'Old Parent',
        type: 'input',
        placeholder: 'Input Old Parent',
        options: '',
        
      },
      
    ]
  };
}
