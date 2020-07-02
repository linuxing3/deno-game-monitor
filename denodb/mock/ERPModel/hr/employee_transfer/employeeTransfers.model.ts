// Copyright 2018-2020 Xing Wenju.
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: EmployeeTransfer
|--------------------------------------------------------------------------
|
| Model of employeeTransfers
|
*/
import {
  DataTypes,
  Model,
} from "https://deno.land/x/denodb/mod.ts";

export class EmployeeTransfer extends Model {
  static table = "employeeTransfers";
  static timestamps = true;

  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    employee: DataTypes.STRING,
    employeeName: DataTypes.STRING,
    transferDate: DataTypes.STRING,
    company: DataTypes.STRING,
    newCompany: DataTypes.STRING,
    department: DataTypes.STRING,
    employeeTransferDetails: DataTypes.STRING,
    employeeTransferDetail: DataTypes.STRING,
    reAllocateLeaves: DataTypes.STRING,
    createNewEmployeeId: DataTypes.STRING,
    newEmployeeId: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: "employee",
        label: "Employee",
        type: "select",
        placeholder: "Input Employee",
        options: "",
      },
      {
        key: "employeeName",
        label: "Employee Name",
        type: "input",
        placeholder: "Input Employee Name",
        options: "",
      },
      {
        key: "transferDate",
        label: "Transfer Date",
        type: "input",
        placeholder: "Input Transfer Date",
        options: "",
      },
      {
        key: "",
        label: "",
        type: "input",
        placeholder: "Input ",
        options: "",
      },
      {
        key: "company",
        label: "Company",
        type: "select",
        placeholder: "Input Company",
        options: "",
      },
      {
        key: "newCompany",
        label: "New Company",
        type: "select",
        placeholder: "Input New Company",
        options: "",
      },
      {
        key: "department",
        label: "Department",
        type: "select",
        placeholder: "Input Department",
        options: "",
      },
      {
        key: "employeeTransferDetails",
        label: "Employee Transfer Details",
        type: "input",
        placeholder: "Input Employee Transfer Details",
        options: "",
      },
      {
        key: "employeeTransferDetail",
        label: "Employee Transfer Detail",
        type: "select",
        placeholder: "Input Employee Transfer Detail",
        options: "",
      },
      {
        key: "reAllocateLeaves",
        label: "Re Allocate Leaves",
        type: "input",
        placeholder: "Input Re Allocate Leaves",
        options: "",
      },
      {
        key: "createNewEmployeeId",
        label: "Create New Employee Id",
        type: "input",
        placeholder: "Input Create New Employee Id",
        options: "",
      },
      {
        key: "newEmployeeId",
        label: "New Employee Id",
        type: "select",
        placeholder: "Input New Employee Id",
        options: "",
      },
      {
        key: "amendedFrom",
        label: "Amended From",
        type: "select",
        placeholder: "Input Amended From",
        options: "",
      },
    ],
  };
}
