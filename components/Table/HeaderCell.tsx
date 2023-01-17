import { ReactNode } from 'react';
import styles from './Cell.module.css';

interface HeaderCellProps {
  column: ReactNode;
}

function HeaderCell({ column }: HeaderCellProps) {
  return <div className={styles.headerCell}>{column}</div>;
}

export default HeaderCell;
