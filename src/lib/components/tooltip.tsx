import React from 'react';

type AnchorPosition = 'left' | 'right' | 'center';

type TooltipProps = {
  children: React.ReactNode;
  anchorPosition?: AnchorPosition;
};

export const Tooltip = ({ anchorPosition = 'left', children }: TooltipProps) => {
  const tailPositionClasses = {
    left: 'left-2',
    center: 'left-1/2 -translate-x-1/2',
    right: 'right-2',
  };

  return (
    <div className="relative inline-block">
      <div
        className="bg-white text-blue-400 rounded-lg text-sm shadow-md"
        style={{
          padding: '0.5rem 1rem',
        }}>
        {children}
      </div>
      <div
        className={`absolute bottom-0 ${tailPositionClasses[anchorPosition]} transform translate-y-1/2 w-3 h-3 bg-white rotate-45`}
      />
    </div>
  );
};

export default Tooltip;
