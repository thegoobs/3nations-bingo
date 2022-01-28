---
inject: <%= path === null %>
to: src/components/index.js
append: <%= path === null %>
skip_if: <%= Name %>
---
export * from './<%= Name %>/<%= Name %>';