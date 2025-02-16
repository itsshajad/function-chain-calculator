import React, { FC, RefObject, useEffect, useState } from 'react';
import { calculateWidth } from './util';

interface FinalProps {
  id: number;
  connectionRef: RefObject<{
    [key: number]: HTMLDivElement | null;
  }>;
  output: number;
}

const Final: FC<FinalProps> = ({ id, connectionRef, output }) => {
  const [currentRef, setcurrentRef] = useState('');

  const { right, bottom }: Pick<DOMRect, 'right' | 'bottom'> =
    connectionRef.current[3]?.getBoundingClientRect() || {
      right: 0,
      bottom: 0,
    };

  useEffect(() => {
    const ref = connectionRef.current[id]?.querySelector('input')?.value || '';
    setcurrentRef(ref);
  }, [output, id, connectionRef]);

  return (
    <div
      className="final input-output"
      style={{
        left: right + 15,
        top: bottom - 50,
        width: calculateWidth(115, currentRef),
      }}
      ref={(el) => {
        if (!connectionRef.current) return;
        connectionRef.current[id] = el;
      }}
    >
      <div className="relative height-100">
        <div className="radio-container">
          <div className="radio" id="input" />
        </div>
        <input
          style={{
            width: calculateWidth(71, currentRef),
          }}
          disabled
          type="text"
          value={output || ''}
        />
      </div>
    </div>
  );
};

export default Final;
