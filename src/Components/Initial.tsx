import React, {
  ChangeEvent,
  Dispatch,
  FC,
  RefObject,
  SetStateAction,
} from 'react';

interface InitialProps {
  id: number;
  connectionRef: RefObject<{
    [key: number]: HTMLDivElement | null;
  }>;
  value: number | string;
  setOutput: Dispatch<SetStateAction<Record<number, number>>>;
}

const Initial: FC<InitialProps> = ({ connectionRef, id, value, setOutput }) => {
  const { left, bottom }: Pick<DOMRect, 'left' | 'bottom'> =
    connectionRef.current[id]?.getBoundingClientRect() || {
      left: 0,
      bottom: 0,
    };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numberPattern = /^[0-9]*$/;
    if (numberPattern.test(value)) {
      setOutput((prevState) => ({
        ...prevState,
        [id]: Number(e.target.value),
      }));
    }
  };

  return (
    <div
      className="initial input-output"
      id={'0'}
      style={{ left: left - 123, top: bottom - 50 }}
      ref={(el) => {
        if (!connectionRef.current) return;
        connectionRef.current[0] = el;
      }}
    >
      <div className="relative height-100">
        <input type="text" value={value} onChange={handleChange} />
        <div className="radio-container right-0">
          <div className="radio" id="output" />
        </div>
      </div>
    </div>
  );
};

export default Initial;
