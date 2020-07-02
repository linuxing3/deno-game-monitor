// Copyright 2018-2020 Xing Wenju.
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: TrainingEvent
|--------------------------------------------------------------------------
|
| Model of trainingEvents
|
*/
import {
  DataTypes,
  Model,
} from "https://deno.land/x/denodb/mod.ts";

export class TrainingEvent extends Model {
  static table = "trainingEvents";
  static timestamps = true;

  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    eventName: DataTypes.STRING,
    trainingProgram: DataTypes.STRING,
    eventStatus: DataTypes.STRING,
    hasCertificate: DataTypes.STRING,
    type: DataTypes.STRING,
    level: DataTypes.STRING,
    company: DataTypes.STRING,
    trainerName: DataTypes.STRING,
    trainerEmail: DataTypes.STRING,
    supplier: DataTypes.STRING,
    contactNumber: DataTypes.STRING,
    course: DataTypes.STRING,
    location: DataTypes.STRING,
    startTime: DataTypes.STRING,
    endTime: DataTypes.STRING,
    introduction: DataTypes.STRING,
    attendees: DataTypes.STRING,
    employees: DataTypes.STRING,
    amendedFrom: DataTypes.STRING,
    employeeEmails: DataTypes.STRING,
  };

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: "eventName",
        label: "Event Name",
        type: "input",
        placeholder: "Input Event Name",
        options: "",
      },
      {
        key: "trainingProgram",
        label: "Training Program",
        type: "select",
        placeholder: "Input Training Program",
        options: "",
      },
      {
        key: "eventStatus",
        label: "Event Status",
        type: "select",
        placeholder: "Input Event Status",
        options: "[object Object],[object Object]",
      },
      {
        key: "hasCertificate",
        label: "Has Certificate",
        type: "input",
        placeholder: "Input Has Certificate",
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
        key: "type",
        label: "Type",
        type: "select",
        placeholder: "Input Type",
        options:
          "[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]",
      },
      {
        key: "level",
        label: "Level",
        type: "select",
        placeholder: "Input Level",
        options: "[object Object],[object Object],[object Object]",
      },
      {
        key: "company",
        label: "Company",
        type: "select",
        placeholder: "Input Company",
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
        key: "trainerName",
        label: "Trainer Name",
        type: "input",
        placeholder: "Input Trainer Name",
        options: "",
      },
      {
        key: "trainerEmail",
        label: "Trainer Email",
        type: "input",
        placeholder: "Input Trainer Email",
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
        key: "supplier",
        label: "Supplier",
        type: "select",
        placeholder: "Input Supplier",
        options: "",
      },
      {
        key: "contactNumber",
        label: "Contact Number",
        type: "input",
        placeholder: "Input Contact Number",
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
        key: "course",
        label: "Course",
        type: "select",
        placeholder: "Input Course",
        options: "",
      },
      {
        key: "location",
        label: "Location",
        type: "input",
        placeholder: "Input Location",
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
        key: "startTime",
        label: "Start Time",
        type: "input",
        placeholder: "Input Start Time",
        options: "",
      },
      {
        key: "endTime",
        label: "End Time",
        type: "input",
        placeholder: "Input End Time",
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
        key: "introduction",
        label: "Introduction",
        type: "input",
        placeholder: "Input Introduction",
        options: "",
      },
      {
        key: "attendees",
        label: "Attendees",
        type: "input",
        placeholder: "Input Attendees",
        options: "",
      },
      {
        key: "employees",
        label: "Employees",
        type: "select",
        placeholder: "Input Employees",
        options: "",
      },
      {
        key: "amendedFrom",
        label: "Amended From",
        type: "select",
        placeholder: "Input Amended From",
        options: "",
      },
      {
        key: "employeeEmails",
        label: "Employee Emails",
        type: "select",
        placeholder: "Input Employee Emails",
        options: "",
      },
    ],
  };
}
