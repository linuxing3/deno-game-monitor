---
to: _templates/<%= name %>/<%= action || 'new' %>/hello.ejs.t
---
<%
const MyModel = name + "Model";
const MyModelName = h.changeCase.lower(name) + "s";
%>
