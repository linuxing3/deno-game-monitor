---
inject: true
to: models/index.ts
after: const modelMap: ModelMap
---
<%
const MyModelName = h.changeCase.lower(name) + "s";
const MyModelInstance = h.changeCase.lower(name) + "Model";
%>  <%= MyModelName %>: <%= MyModelInstance %>