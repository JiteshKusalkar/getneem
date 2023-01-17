import { ReactNode } from 'react';
import TableHeader from './TableHeader';

interface Username {
  first: string;
  last: string;
  preferred: string;
}

type Insurance = 'primary' | 'secondary';

export interface HouseholdData {
  id: string;
  isCovered: boolean;
  name: Username;
  isSubscribed: boolean;
  insurance: Insurance;
  identifier: string;
}

export interface Column {
  Header: () => ReactNode;
  Cell: () => ReactNode;
}

interface TableProps {
  data: HouseholdData[];
  columns: Column[];
}

function Table({ data, columns }: TableProps) {
  return (
    <div>
      <TableHeader columns={columns} />
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}

export default Table;
