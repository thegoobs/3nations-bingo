---
inject: true
to: src/components/index.js
append: true
skip_if: <%= (path && 'export') || Name %>
---
export * from './<%= Name %>/<%= Name %>';