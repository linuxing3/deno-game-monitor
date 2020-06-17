---
to: _templates/<%= name %>/<%= action || 'new' %>/prompt.js
---
module.exports = [
  {
    type: 'input',
    name: 'name',
    message: "What's your name?"
  },
  {
    type: 'input',
    name: 'action',
    message: "What's your action?"
  }
]
