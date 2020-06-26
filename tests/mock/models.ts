import { DataTypes, Database, Model } from "https://deno.land/x/denodb/mod.ts";

export class User extends Model {
  static table = "users";
  static timestamps = true;

  static fields = {
    id: { primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.FLOAT,
  };
}


export class Militant extends Model {
  static table = "militants";
  static timestamps = true;

  static fields = {
    id: { primaryKey: true, autoIncrement: true },
    admitted_at: DataTypes.STRING,
    formalized_at: DataTypes.STRING,
    registered_at: DataTypes.STRING,
    transfered_at: DataTypes.STRING
  };
}

export class Member extends Model {
  static table = "members";
  static timestamps = true;

  static fields = {
    id: { primaryKey: true, autoIncrement: true },
    department: DataTypes.STRING,
    name: DataTypes.string,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    etnia: DataTypes.STRING,
    academicBackground: DataTypes.STRING,
    foreignLanguage: DataTypes.STRING,
    politicalRole: DataTypes.STRING,
    positionAndRank: DataTypes.STRING,
    militantRole: DataTypes.STRING,
    duty: DataTypes.STRING,
    fromEntity: DataTypes.STRING,
    arrivingDate: DataTypes.STRING,
    rotatingDate: DataTypes.STRING,
    sendingEntity: DataTypes.STRING,
    conyugeName: DataTypes.STRING,
    conyugeEntity: DataTypes.STRING,
    conyugeBonus: DataTypes.STRING,
    memo: DataTypes.STRING,
    protocolId: DataTypes.STRING,
    isActive: DataTypes.STRING
    militant: DataTypes.STRING,
    appraisals: DataTypes.STRING,
    designations: DataTypes.STRIN,
    projects: DataTypes.STRING
  },
}

export class Project extends Model {
  static table = "projects";
  static timestamps = true;
  static fields = {
    id: { primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    type: DataTypes.STRING,
    status: DataTypes.STRING,
    isActive: DataTypes.STRING,
    percentComplete: DataTypes.STRING,
    expectedStartDate: DataTypes.STRING,
    expectedEndDate: DataTypes.STRING,
    priority: DataTypes.STRING,
    department: DataTypes.STRING,
    tasks: DataTypes.STRING,
    notes: DataTypes.STRING,
    actualStartDate: DataTypes.STRING,
    actualEndDate: DataTypes.STRING,
    estimatedCost: DataTypes.STRING,
    totalCost: DataTypes.STRING,
    ExpenseClaim: DataTypes.STRING,
    collectProgress: DataTypes.STRING,
    frequency: DataTypes.STRING,
    fromTime: DataTypes.STRING,
    toTime: DataTypes.STRING
  }
}

export class Flight extends Model {
  static table = "flights";
  static timestamps = true;

  static fields = {
    id: { primaryKey: true, autoIncrement: true },
    departure: DataTypes.DataTypes.STRING,
    destination: DataTypes.DataTypes.STRING,
    flightDuration: DataTypes.FLOAT,
  };

  static defaults = {
    flightDuration: 2.5,
  };
}

export class Vehicle extends Model {
  static table = "vehicles";
  static timestamps = true;

  static fields = {
    id: { primaryKey: true, autoIncrement: true },
    departure: DataTypes.DataTypes.STRING,
    licensePlate: DataTypes.STRING,
    mark: string;
    model: DataTypes.STRING,
    details: DataTypes.STRING,
    lastOdometerValue: DataTypes.STRING,
    location: DataTypes.STRING,
    chassisNo: DataTypes.STRING,
    value: DataTypes.STRING,
    insuranceDetails: DataTypes.STRING,
    insuranceCompany: DataTypes.STRING,
    policyNo: DataTypes.STRING,
    startDate: DataTypes.STRING,
    endDate: DataTypes.STRING,
    additionalDetails: DataTypes.STRING,
    fueltype: DataTypes.STRING,
    fuelUom: DataTypes.STRING,
    color: DataTypes.STRING,
    wheels: DataTypes.STRING,
    door: DataTypes.STRING
  };

  static defaults = {
    flightDuration: 2.5,
  };
}


export class Document extends Model {
  static table = "users";
  static timestamps = true;

  static fields = {
    id: { primaryKey: true, autoIncrement: true },
    year: DataTypes.STRING,
    date: DataTypes.STRING,
    export classiLevel: DataTypes.STRING,
    category: DataTypes.STRING,
    inOrOut: DataTypes.STRING,
    sendingCode: DataTypes.STRING,
    orderedNumber: DataTypes.STRING,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    toEntity: DataTypes.STRING,
    copyEntity: DataTypes.STRING,
    attachment: DataTypes.STRING,
    keyword: DataTypes.STRING,
    workEntity: DataTypes.STRING,
    author: DataTypes.STRING,
  };
}

export class Employee extends Model {
  static table = "employee";
  static timestamps = true;

  static fields = {
    id: { primaryKey: true, autoIncrement: true },
    salutation: DataTypes.STRING,
    firstName: DataTypes.STRING,
    middleName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    image: DataTypes.STRING,
    status: DataTypes.STRING,
    employeeNo: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    joiningDate: DataTypes.STRING,
    emergencyContact: DataTypes.STRING,
    emergencyPhoneNo: DataTypes.STRING,
    contractStartDate: DataTypes.STRING,
    contractEndDate: DataTypes.STRING,
    department: DataTypes.STRING,
    designation: DataTypes.STRING,
    reportsTo: DataTypes.STRING,
    grade: DataTypes.STRING,
    branch: DataTypes.STRING,
    leavePolicy: DataTypes.STRING,
    holidayList: DataTypes.STRING,
    salaryMode: DataTypes.STRING,
    bankName: DataTypes.STRING,
    bankAccount: DataTypes.STRING,
    healthInsurance: DataTypes.STRING,
    healthInsuranceProvider: DataTypes.STRING,
    healthInsuranceNo: DataTypes.STRING,
    cellPhone: DataTypes.STRING,
    preferedEmail: DataTypes.STRING,
    companyEmail: DataTypes.STRING,
    personalEmail: DataTypes.STRING,
    unsubscribed: DataTypes.STRING,
    permanentAccommodation: DataTypes.STRING,
    permanentAddress: DataTypes.STRING,
    currentAccomodation: DataTypes.STRING,
    currentAddress: DataTypes.STRING,
    bio: DataTypes.STRING,
    passportNumber: DataTypes.STRING,
    dateOfIssue: DataTypes.STRING,
    placeOfIssue: DataTypes.STRING,
    maritalStatus: DataTypes.STRING,
    bloodGroup: DataTypes.STRING,
    familyBackground: DataTypes.STRING,
    healthDetails: DataTypes.STRING,
    educationalQualification: DataTypes.STRING,
    previousWorkExperience: DataTypes.STRING,
    externalWorkHistory: DataTypes.STRING,
    historyInCompany: DataTypes.STRING,
    relievingDate: DataTypes.STRING,
    reasonForLeaving: DataTypes.STRING,
    leaveEncashed: DataTypes.STRING,
    encashDate: DataTypes.STRING,
    resiged: DataTypes.STRING,
    reasonForResignation: DataTypes.STRING,
    feedback: DataTypes.STRING,
  };
}