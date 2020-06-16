---
to: _templates/<%= name %>/<%= action || 'new' %>/prompt.js
---
module.exports = [
  {
    type: 'input',
    name: 'message',
    message: "What's your message?"
  }
]
