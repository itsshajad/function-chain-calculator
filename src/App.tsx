import React, { Fragment, useEffect, useRef, useState } from 'react';
import FunctionCard from './Components/FunctionCard';
import ConnectionLine from './Components/ConnectionLine';
import cardData from './Components/card-data.json';
import Initial from './Components/Initial';
import Final from './Components/Final';
import { DataObject } from './Components/type';

const App = () => {
  const connectionRef = useRef<{ [key: number]: HTMLDivElement | null }>({});
  const [showConnections, setShowConnections] = useState(false);
  const [initialValue, setInitialValue] = useState<Record<number, number>>({
    1: 2,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowConnections(true);
    }, 20);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className="flex-center"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '107px 131px',
        marginTop: '100px',
        marginBottom: '100px',
      }}
    >
      <Initial
        id={1}
        value={initialValue[1]}
        connectionRef={connectionRef}
        setOutput={setInitialValue}
      />

      {cardData.map((val: DataObject) => (
        <Fragment key={val.id}>
          <FunctionCard
            data={val}
            value={initialValue[val.id]}
            setOutput={setInitialValue}
            connectionRef={connectionRef}
          />

          {showConnections && (
            <ConnectionLine
              id={val.id}
              connectionId={val.connectionId}
              connectionRef={connectionRef}
            />
          )}
        </Fragment>
      ))}

      <Final
        id={cardData.length + 1}
        connectionRef={connectionRef}
        output={initialValue[cardData.length + 1]}
      />
    </div>
  );
};

export default App;
