---
to: _templates/<%= name %>/<%= action || 'new' %>/hello.ejs.t
---
---
inject: true
to: deps.ts
after: hygen starts
skip_if: <%=name %>
---
export <%=name %> from "https://deno.land/std/<%=name %>/mod.ts";

