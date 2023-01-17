import HeaderCell from './HeaderCell';
import { Column } from '.';
import styles from './TableHeader.module.css';

interface TableHeaderProps {
  columns: Column[];
}

function TableHeader({ columns }: TableHeaderProps) {
  return (
    <div className={styles.main}>
      {columns.map((column, i) => (
        <HeaderCell column={column.Header()} key={i} />
      ))}
    </div>
  );
}

export default TableHeader;
