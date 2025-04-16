import React from 'react';

type Status = 'In Stock' | 'Reorder';

interface StatusBadgeProps {
  status: Status;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const isAvailable = status === 'In Stock';

  return (
    <span
      className={`w-[80px] flex justify-center items-center gap-1.5 rounded-full px-2.5 py-2 text-xs font-medium ${
        isAvailable
          ? 'bg-green-100 text-green-700'
          : 'bg-red-100 text-red-700'
      }`}
    >
      <span
        className={`block h-1.5 w-1.5 rounded-full ${
          isAvailable ? 'bg-green-500' : 'bg-red-500'
        }`}
      ></span>
      {status}
    </span>
  );
};

export default StatusBadge;