---
inject: true
to: services/<%= name %>.<%= action %>.service.ts
after: hygen starts
skip_if: services
---
export async function moreService() {
  return;
}