---
inject: true
to: models/index.ts
after: hygen starts
skip_if: <%= name %>Model
---
<%
const MyModel = name + "Model";
const MyModelInstance = h.changeCase.lower(name) + "Model";
%>import { <%= MyModel %> } from "../models/<%= MyModel %>.ts";
export const <%= MyModelInstance %> = dso.define(<%= MyModel %>);