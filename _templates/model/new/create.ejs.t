---
to: models/<%= name %>.model.ts
---
<%
const MyModel = name + "Model";
const MyModelName = h.changeCase.lower(name) + "s";
%>// Copyright 2018-2020 Xing Wenju. All rights reserved. MIT license.
// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Model: <%= name %>
|--------------------------------------------------------------------------
|
| Model of <%= name %>
|
*/
import {
  BaseModel,
  Field,
  FieldType,
  Model,
} from "../deps.ts";

// Define a database model
@Model("<%= MyModelName %>")
export class <%= MyModel %> extends BaseModel {
  @Field({
    type: FieldType.INT,
    primary: true,
    length: 11,
    autoIncrement: true,
  })
  id!: number;

<% fields.split(',').forEach(field => { %>
  @Field({ type: FieldType.STRING })
  <%= field %>?: string;
<% }) %>
}