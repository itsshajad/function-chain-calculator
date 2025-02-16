import React, { FC, useEffect, useState } from 'react';

interface ConnectionLineProps {
  id: number;
  connectionId: number | undefined;
  connectionRef: React.RefObject<{ [key: number]: HTMLDivElement | null }>;
}
interface ConnectionCoordinates {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}
const ConnectionLine: FC<ConnectionLineProps> = ({
  id,
  connectionId,
  connectionRef,
}) => {
  const [connection, setConnection] = useState<ConnectionCoordinates | null>(
    null
  );

  useEffect(() => {
    const fromElement = connectionRef.current[id]
      ?.querySelector('#output')
      ?.getBoundingClientRect();
    const toElement = connectionRef.current[connectionId as number]
      ?.querySelector('#input')
      ?.getBoundingClientRect();

    if (!fromElement || !toElement) return;

    const x1 = fromElement.left + fromElement.width / 2;
    const y1 = fromElement.top + fromElement.height / 2;
    const x2 = toElement.left + toElement.width / 2;
    const y2 = toElement.top + toElement.height / 2;

    setConnection({ x1, y1, x2, y2 });
  }, [connectionId, connectionRef, id]);

  if (!connection) return null;

  const { x1, x2, y1, y2 } = connection;
  const midX = (x1 + x2) / 2;
  const pathD = `M${x1},${y1} C${midX},${y1} ${midX},${y2} ${x2},${y2}`;

  return (
    <svg className="connection-svg">
      <path
        d={pathD}
        stroke="rgba(0, 102, 255, 0.31)"
        fill="transparent"
        strokeWidth="7"
      />
    </svg>
  );
};

export default ConnectionLine;
