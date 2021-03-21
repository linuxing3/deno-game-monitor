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
import {
  FieldValue,
} from "https://deno.land/x/denodb/lib/query-builder.ts";
import {
  ModelFields,
} from "https://deno.land/x/denodb/lib/model.ts";


export class TravelRequest extends Model { 
  static table = "travelRequests";
  static timestamps = true;
  
  static fields: ModelFields = {
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

  static meta = {
    // field meta information for UI render
    fieldProperty: [
      {
        key: 'travelType',
        label: 'Travel Type',
        type: 'select',
        placeholder: 'Input Travel Type',
        options: '[object Object],[object Object]',
        
      },
      {
        key: 'travelFunding',
        label: 'Travel Funding',
        type: 'select',
        placeholder: 'Input Travel Funding',
        options: '[object Object],[object Object],[object Object]',
        
      },
      {
        key: 'copyOfInvitationAnnouncement',
        label: 'Copy Of Invitation Announcement',
        type: 'input',
        placeholder: 'Input Copy Of Invitation Announcement',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'purposeOfTravel',
        label: 'Purpose Of Travel',
        type: 'select',
        placeholder: 'Input Purpose Of Travel',
        options: '',
        
      },
      {
        key: 'detailsOfSponsorNameLocation',
        label: 'Details Of Sponsor Name Location',
        type: 'input',
        placeholder: 'Input Details Of Sponsor Name Location',
        options: '',
        
      },
      {
        key: 'description',
        label: 'Description',
        type: 'input',
        placeholder: 'Input Description',
        options: '',
        
      },
      {
        key: 'anyOtherDetails',
        label: 'Any Other Details',
        type: 'input',
        placeholder: 'Input Any Other Details',
        options: '',
        
      },
      {
        key: 'employeeDetails',
        label: 'Employee Details',
        type: 'input',
        placeholder: 'Input Employee Details',
        options: '',
        
      },
      {
        key: 'employee',
        label: 'Employee',
        type: 'select',
        placeholder: 'Input Employee',
        options: '',
        
      },
      {
        key: 'employeeName',
        label: 'Employee Name',
        type: 'input',
        placeholder: 'Input Employee Name',
        options: '',
        
      },
      {
        key: 'contactNumber',
        label: 'Contact Number',
        type: 'input',
        placeholder: 'Input Contact Number',
        options: '',
        
      },
      {
        key: 'contactEmail',
        label: 'Contact Email',
        type: 'input',
        placeholder: 'Input Contact Email',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'input',
        placeholder: 'Input ',
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
        key: 'identificationDocumentType',
        label: 'Identification Document Type',
        type: 'select',
        placeholder: 'Input Identification Document Type',
        options: '',
        
      },
      {
        key: 'identificationDocumentNumber',
        label: 'Identification Document Number',
        type: 'input',
        placeholder: 'Input Identification Document Number',
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
        key: 'travelItinerary',
        label: 'Travel Itinerary',
        type: 'input',
        placeholder: 'Input Travel Itinerary',
        options: '',
        
      },
      {
        key: '',
        label: '',
        type: 'select',
        placeholder: 'Input ',
        options: '',
        
      },
      {
        key: 'costingDetails',
        label: 'Costing Details',
        type: 'input',
        placeholder: 'Input Costing Details',
        options: '',
        
      },
      {
        key: 'costCenter',
        label: 'Cost Center',
        type: 'select',
        placeholder: 'Input Cost Center',
        options: '',
        
      },
      {
        key: 'costing',
        label: 'Costing',
        type: 'select',
        placeholder: 'Input Costing',
        options: '',
        
      },
      {
        key: 'eventDetails',
        label: 'Event Details',
        type: 'input',
        placeholder: 'Input Event Details',
        options: '',
        
      },
      {
        key: 'nameOfOrganizer',
        label: 'Name Of Organizer',
        type: 'input',
        placeholder: 'Input Name Of Organizer',
        options: '',
        
      },
      {
        key: 'addressOfOrganizer',
        label: 'Address Of Organizer',
        type: 'input',
        placeholder: 'Input Address Of Organizer',
        options: '',
        
      },
      {
        key: 'otherDetails',
        label: 'Other Details',
        type: 'input',
        placeholder: 'Input Other Details',
        options: '',
        
      },
      
    ]
  };
}

export interface ITravelRequest {
  id: FieldValue;
  travelType: FieldValue;
  travelFunding: FieldValue;
  copyOfInvitationAnnouncement: FieldValue;
  purposeOfTravel: FieldValue;
  detailsOfSponsorNameLocation: FieldValue;
  description: FieldValue;
  anyOtherDetails: FieldValue;
  employeeDetails: FieldValue;
  employee: FieldValue;
  employeeName: FieldValue;
  contactNumber: FieldValue;
  contactEmail: FieldValue;
  dateOfBirth: FieldValue;
  identificationDocumentType: FieldValue;
  identificationDocumentNumber: FieldValue;
  passportNumber: FieldValue;
  travelItinerary: FieldValue;
  costingDetails: FieldValue;
  costCenter: FieldValue;
  costing: FieldValue;
  eventDetails: FieldValue;
  nameOfOrganizer: FieldValue;
  addressOfOrganizer: FieldValue;
  otherDetails: FieldValue;
  
}
