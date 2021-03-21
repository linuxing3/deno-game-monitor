// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: TravelRequest
|--------------------------------------------------------------------------
|
| Model Class and Interface of travelRequests
|
*/
import {
  DataTypes,
  Model
} from "https://deno.land/x/denodb/mod.ts";


export class TravelRequest extends Model { 
  static table = "travelRequests";
  static timestamps = true;
  
  static fields = {
    // fields list for ORM Maping
    id: { primaryKey: true, autoIncrement: true },
    travelType: DataTypes.STRING,
    travelFunding: DataTypes.STRING,
    copyOfInvitationAnnouncement: DataTypes.STRING,
    purposeOfTravel: DataTypes.STRING,
    detailsOfSponsorNameLocation: DataTypes.STRING,
    description: DataTypes.STRING,
    anyOtherDetails: DataTypes.STRING,
    employeeDetails: DataTypes.STRING,
    employee: DataTypes.STRING,
    employeeName: DataTypes.STRING,
    contactNumber: DataTypes.STRING,
    contactEmail: DataTypes.STRING,
    dateOfBirth: DataTypes.STRING,
    identificationDocumentType: DataTypes.STRING,
    identificationDocumentNumber: DataTypes.STRING,
    passportNumber: DataTypes.STRING,
    travelItinerary: DataTypes.STRING,
    costingDetails: DataTypes.STRING,
    costCenter: DataTypes.STRING,
    costing: DataTypes.STRING,
    eventDetails: DataTypes.STRING,
    nameOfOrganizer: DataTypes.STRING,
    addressOfOrganizer: DataTypes.STRING,
    otherDetails: DataTypes.STRING,
    
  };

}
