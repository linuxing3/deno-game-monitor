---
inject: true
to: models/index.ts
after: hygen starts
skip_if: <%= name %>Model
---
<%
const MyModel = h.inflection.titleize(name);
const MyModelInstance = h.changeCase.lower(name) + "Model";
%>import { <%= MyModel %> } from "../models/<%= name %>.model.ts";
export const <%= MyModelInstance %> = dso.define(<%= MyModel %>);