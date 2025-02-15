import React, { useEffect, useState } from 'react';

const ConnectionLine = ({ id, connectionId, connectionRef }) => {
  const [connection, setConnection] = useState([]);

  useEffect(() => {
    const fromElement = connectionRef.current[id]
      ?.querySelector('#output')
      ?.getBoundingClientRect();
    const toElement = connectionRef.current[connectionId]
      ?.querySelector('#input')
      ?.getBoundingClientRect();

    const x1 = fromElement?.left + fromElement?.width / 2;
    const y1 = fromElement?.top + fromElement?.height / 2;
    const x2 = toElement?.left + toElement?.width / 2;
    const y2 = toElement?.top + toElement?.height / 2;

    setConnection({ x1, y1, x2, y2 });
  }, [connectionId, connectionRef, id]);

  const { x1, x2, y1, y2 } = connection;
  const midX = (x1 + x2) / 2;
  const pathD = `M${x1},${y1} C${midX},${y1} ${midX},${y2} ${x2},${y2}`;

  if (!x1 || !x2 || !y1 || !y2) {
    return;
  }

  return (
    <svg className="connection-svg">
      <path
        d={pathD}
        stroke="rgba(0, 102, 255, 0.31)"
        fill="transparent"
        strokeWidth="7"
      />
      {/* <line
        x1={connection[0].left}
        y1={connection[0].top}
        x2={connection[1].left}
        y2={connection[1].top}
        stroke={'blue'}
        strokeWidth="2"
      /> */}
    </svg>
  );
};

export default ConnectionLine;
