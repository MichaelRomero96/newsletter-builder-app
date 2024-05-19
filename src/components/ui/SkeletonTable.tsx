import { FC } from 'react';
import { Skeleton } from './Skeleton';

interface SkeletonRowProps {
  columns?: number;
}
const SkeletonRow: FC<SkeletonRowProps> = ({ columns = 6 }) => {
  return (
    <div className="flex items-center justify-between pt-4">
      {Array.from({ length: columns }, (_, index) => (
        <div key={index}>
          <Skeleton className="h-3.5 bg-gray-300 rounded-full w-24 mb-2.5" />
          <Skeleton className="w-32 h-3 bg-gray-200 rounded-full" />
        </div>
      ))}
      <Skeleton className="h-3.5 bg-gray-300 rounded-full w-12 mb-2.5" />
    </div>
  );
};

interface SkeletonTableProps {
  length?: number;
  columns?: number;
}
const SkeletonTable: FC<SkeletonTableProps> = ({ length = 8, columns }) => {
  return (
    <div className="p-6 mx-auto">
      {Array.from({ length }, (_, index) => (
        <SkeletonRow columns={columns} key={index} />
      ))}
    </div>
  );
};

export default SkeletonTable;
