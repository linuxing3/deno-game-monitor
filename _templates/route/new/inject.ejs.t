---
inject: true
to: server.ts
after: hygen route starts
skip_if: <%= name %>Router
---
<%
const routerName = name + "Router"
%>
import <%= routerName %> from "./routes/<%= name %>.router.ts";
