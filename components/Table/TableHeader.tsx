import Cell from './Cell';
import { Column } from './Table';
import styles from './TableHeader.module.css';

interface TableHeaderProps {
  columns: Column[];
}

function TableHeader({ columns }: TableHeaderProps) {
  return (
    <div className={styles.main}>
      {columns.map((column, i) => (
        <Cell column={column.Header} key={i} />
      ))}
    </div>
  );
}

export default TableHeader;
