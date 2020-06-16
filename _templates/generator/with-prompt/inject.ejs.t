---
to: _templates/<%= name %>/<%= action || 'new' %>/inject.ejs.t
---
---
inject: true
to: <%= name %>/<%= action || 'new' %>/<%= name %>.ts
after: hygen starts
skip_if: <%= name %>
---
console.log("Hygen is awesome");
