import HeaderCell from './HeaderCell';
import { Column, HouseholdData } from './Table';

interface TableBodyProps {
  data: HouseholdData[];
  columns: Column[];
}

function TableBody({ columns, data }: TableBodyProps) {
  return (
    <div>
      {data.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-[1fr,400px,repeat(3,minmax(0,1fr))] gap-4"
        >
          {columns.map((column, i) => (
            <HeaderCell column={column.Cell(item)} key={i} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default TableBody;
