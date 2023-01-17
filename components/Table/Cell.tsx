import { ReactNode } from 'react';
import styles from './Cell.module.css';

interface ColumnProps {
  column: () => ReactNode;
}

function Cell({ column }: ColumnProps) {
  return <div className={styles.headerCell}>{column()}</div>;
}

export default Cell;
