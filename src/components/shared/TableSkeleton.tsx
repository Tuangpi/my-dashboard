import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

interface TableSkeletonProps {
  numberOfRows?: number;
  numberOfTableColumns: number;
}

const TableSkeleton: React.FC<TableSkeletonProps> = ({
  numberOfRows = 3,
  numberOfTableColumns,
}) => {
  return (
    <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f5f5f5">
      <table className="w-full border-collapse">
        <tbody>
          {Array.from({ length: numberOfRows }).map((_, rowIndex) => (
            <tr className="bg-white border-b" key={rowIndex}>
              {Array.from({ length: numberOfTableColumns }).map(
                (_, colIndex) => (
                  <td className="px-4 py-3" key={colIndex}>
                    <Skeleton className="h-6 w-full" />
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </SkeletonTheme>
  );
};

export default TableSkeleton;
