---
inject: true
to: src/components/index.js
append: true
skip_if: <% Name %>
---
export * from './<%= Name %>/<%= Name %>';