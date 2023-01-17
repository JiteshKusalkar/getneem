import { ReactNode } from 'react';

interface ColumnProps {
  column: () => ReactNode;
}

function Cell({ column }: ColumnProps) {
  return <div>{column()}</div>;
}

export default Cell;
