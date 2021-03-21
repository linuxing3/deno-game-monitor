// Copyright 2018-2020 Xing Wenju. 
// All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: ProjectUser
|--------------------------------------------------------------------------
|
| Model Class and Interface of projectUsers
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model
} from "https://deno.land/x/dso@v1.0.0/mod.ts";

@Model("projectUsers")
export class ProjectUser extends BaseModel { 

  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true
  })
  id!: number;

  @Field({ type: FieldType.STRING })
  user!: string;
  
  @Field({ type: FieldType.STRING })
  email!: string;
  
  @Field({ type: FieldType.STRING })
  image!: string;
  
  @Field({ type: FieldType.STRING })
  fullName!: string;
  
  @Field({ type: FieldType.STRING })
  welcomeEmailSent!: string;
  
  @Field({ type: FieldType.STRING })
  viewAttachments!: string;
  
  @Field({ type: FieldType.STRING })
  projectStatus!: string;
  
  
}

export interface IProjectUser {
  id: number;
  user: string;
  email: string;
  image: string;
  fullName: string;
  welcomeEmailSent: string;
  viewAttachments: string;
  projectStatus: string;
  
}
