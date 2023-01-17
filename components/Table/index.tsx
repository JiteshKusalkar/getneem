import { ReactNode } from 'react';
import TableBody from './TableBody';
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
  Cell: (data: HouseholdData) => ReactNode;
}

interface TableProps {
  data: HouseholdData[];
  columns: Column[];
}

function Table({ data, columns }: TableProps) {
  return (
    <div>
      <TableHeader columns={columns} />
      <TableBody data={data} columns={columns} />
    </div>
  );
}

export default Table;
