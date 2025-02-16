import React, { FC, RefObject } from 'react';

interface FinalProps {
  id: number;
  connectionRef: RefObject<{
    [key: number]: HTMLDivElement | null;
  }>;
  output: number;
}

const Final: FC<FinalProps> = ({ id, connectionRef, output }) => {
  const { right, bottom }: Pick<DOMRect, 'right' | 'bottom'> =
    connectionRef.current[3]?.getBoundingClientRect() || {
      right: 0,
      bottom: 0,
    };

  return (
    <div
      className="final input-output"
      style={{ left: right + 15, top: bottom - 50 }}
      ref={(el) => {
        if (!connectionRef.current) return;
        connectionRef.current[id] = el;
      }}
    >
      <div className="relative height-100">
        <div className="radio-container">
          <div className="radio" id="input" />
        </div>
        <input disabled type="text" value={output || ''} />
      </div>
    </div>
  );
};

export default Final;
