---
to: <%= path || 'src/components' %>/<%= Name %>/<%= Name %>.js
---
import React from 'react';
import styles from './<%= Name %>.module.scss';

export const <%= Name %> = () => (
    <div className={styles.<%= name %>}>Placeholder for <%= Name %></div>
);
