---
inject: true
to: controllers/<%= name %>.controller.ts
after: hygen starts
skip_if: controllers
---
console.log("Hygen is awesome");
