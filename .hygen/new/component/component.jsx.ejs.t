---
to: <%= absPath %>/<%= component_name %>.jsx
---
import React from 'react';
import styles from './style.module.css';

export const <%= component_name %> = (props) => {
  return <div className={styles.wrapper} data-testid="hygen" />;
};