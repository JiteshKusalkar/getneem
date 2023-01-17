import { ReactNode } from 'react';
import styles from './Cell.module.css';

interface BodyCellProps {
  column: () => ReactNode;
}

function BodyCell({ column }: BodyCellProps) {
  return <div className={styles.headerCell}>{column()}</div>;
}

export default BodyCell;
