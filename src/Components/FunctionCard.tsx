import React, {
  ChangeEvent,
  Dispatch,
  FC,
  RefObject,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import './FunctionCard.css';
import { DataObject } from './type';
import CardDate from './card-data.json';
import { Calculate } from './util';
import Dot from './Dot';

interface FunctionCardInterFace {
  data: DataObject;
  connectionRef: RefObject<{
    [key: number]: HTMLDivElement | null;
  }>;
  value?: number;
  setOutput: Dispatch<SetStateAction<Record<number, number>>>;
}

const FunctionCard: FC<FunctionCardInterFace> = ({
  data,
  connectionRef,
  value,
  setOutput,
}) => {
  const { input, header, id, connectionId } = data as DataObject;
  const [equation, setEquation] = useState<string>(data.input?.value || '');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEquation(e.target.value);
    setOutput((prev) => {
      const output = Calculate(e.target.value, prev[id]);
      return { ...prev, [connectionId as number]: output };
    });
  };

  useEffect(() => {
    setOutput((prev) => {
      const output = Calculate(equation, prev[id]);

      return { ...prev, [connectionId as number]: output };
    });
  }, [setOutput, value]);

  return (
    <div
      className="card-box"
      id={String(id)}
      ref={(el) => {
        if (!connectionRef.current) return;
        connectionRef.current[id] = el;
      }}
    >
      <div className="header">
        <div>
          <Dot />
        </div>
        <h4 className="heading-text">{header}</h4>
      </div>

      <div>
        <div className="input-container">
          <label htmlFor="label" className="label">
            {input?.label}
          </label>
          <input
            value={equation}
            onChange={handleChange}
            type="text"
            id="label"
            className="input"
          />
        </div>
        <div className="input-container">
          <label htmlFor="next function" className="label">
            Next function
          </label>
          <select disabled className="input">
            {CardDate.map((item) => (
              <option selected={item.id === connectionId} value={item.id}>
                {item.header}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-center space-between mt-46">
          <div className="flex-center space-between gap-4">
            <div className="radio" id="input" />
            <p className="footertext">input</p>
          </div>
          <div className="flex-center space-between gap-4">
            <p className="footertext">output</p>
            <div className="radio" id="output" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunctionCard;
