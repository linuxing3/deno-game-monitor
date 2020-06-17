---
to: models/<%= name %>.model.ts
---
<%
const MyModel = name + "Model";
const MyModelName = h.changeCase.lower(name) + "s";
%>// deno-lint-ignore-file
/*
|--------------------------------------------------------------------------
| Models
|--------------------------------------------------------------------------
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