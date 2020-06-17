---
inject: true
to: middleware/<%= name %>.<%= action %>.middleware.ts
after: hygen starts
skip_if: middleware
---
