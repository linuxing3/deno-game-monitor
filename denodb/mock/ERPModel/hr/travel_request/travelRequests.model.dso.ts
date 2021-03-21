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
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("travelRequests")
export class TravelRequest extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  travelType!: string;
  
  @Field({ type: FieldType.STRING })
  travelFunding!: string;
  
  @Field({ type: FieldType.STRING })
  copyOfInvitationAnnouncement!: string;
  
  @Field({ type: FieldType.STRING })
  purposeOfTravel!: string;
  
  @Field({ type: FieldType.STRING })
  detailsOfSponsorNameLocation!: string;
  
  @Field({ type: FieldType.STRING })
  description!: string;
  
  @Field({ type: FieldType.STRING })
  anyOtherDetails!: string;
  
  @Field({ type: FieldType.STRING })
  employeeDetails!: string;
  
  @Field({ type: FieldType.STRING })
  employee!: string;
  
  @Field({ type: FieldType.STRING })
  employeeName!: string;
  
  @Field({ type: FieldType.STRING })
  contactNumber!: string;
  
  @Field({ type: FieldType.STRING })
  contactEmail!: string;
  
  @Field({ type: FieldType.STRING })
  dateOfBirth!: string;
  
  @Field({ type: FieldType.STRING })
  identificationDocumentType!: string;
  
  @Field({ type: FieldType.STRING })
  identificationDocumentNumber!: string;
  
  @Field({ type: FieldType.STRING })
  passportNumber!: string;
  
  @Field({ type: FieldType.STRING })
  travelItinerary!: string;
  
  @Field({ type: FieldType.STRING })
  costingDetails!: string;
  
  @Field({ type: FieldType.STRING })
  costCenter!: string;
  
  @Field({ type: FieldType.STRING })
  costing!: string;
  
  @Field({ type: FieldType.STRING })
  eventDetails!: string;
  
  @Field({ type: FieldType.STRING })
  nameOfOrganizer!: string;
  
  @Field({ type: FieldType.STRING })
  addressOfOrganizer!: string;
  
  @Field({ type: FieldType.STRING })
  otherDetails!: string;
  
  
}

export interface ITravelRequest {
  id: number;
  travelType: string;
  travelFunding: string;
  copyOfInvitationAnnouncement: string;
  purposeOfTravel: string;
  detailsOfSponsorNameLocation: string;
  description: string;
  anyOtherDetails: string;
  employeeDetails: string;
  employee: string;
  employeeName: string;
  contactNumber: string;
  contactEmail: string;
  dateOfBirth: string;
  identificationDocumentType: string;
  identificationDocumentNumber: string;
  passportNumber: string;
  travelItinerary: string;
  costingDetails: string;
  costCenter: string;
  costing: string;
  eventDetails: string;
  nameOfOrganizer: string;
  addressOfOrganizer: string;
  otherDetails: string;
  
}
