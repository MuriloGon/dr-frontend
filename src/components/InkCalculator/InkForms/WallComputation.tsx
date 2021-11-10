import React, { FC } from 'react';
import { Form, InputsContainer, InkH2 } from '@styles/inkCalculator';
import { WallComputation as WallCompType } from '../_utils';
import InkInput from './InkInput';

type Props = {
  currentWall: WallCompType,
  setData: {
    setHeight: (height: number) => void,
    setWidth: (width: number) => void,
    setDoors: (doors: number) => void,
    setWindows: (windows: number) => void
  }
};

const formatValue = (num: number, min: number, max: number) => {
  if (Number.isNaN(num) || num < min) return min;
  if (num > max) return max;
  return num;
};

const WallComputation: FC<Props> = ({ currentWall, setData }) => {
  const WallInputs = () => (
    <InputsContainer>
      <InkInput
        min={1}
        max={15}
        step={0.1}
        value={currentWall.wall.height}
        name="Altura"
        onChange={
          ({ target: { valueAsNumber } }) => setData.setHeight(
            formatValue(valueAsNumber, 1, 15),
          )
        }
      />
      <InkInput
        min={0}
        step={0.1}
        max={15}
        value={currentWall.wall.width}
        name="Largura"
        onChange={
          ({ target: { valueAsNumber } }) => setData.setWidth(
            formatValue(valueAsNumber, 1, 15),
          )
        }
      />
    </InputsContainer>
  );

  const DoorsAndWindowsInputs = () => (
    <InputsContainer>
      <InkInput
        min={0}
        max={50}
        value={currentWall.windows}
        name="Janelas"
        onChange={
          ({ target: { valueAsNumber } }) => setData.setWindows(
            formatValue(Math.floor(valueAsNumber), 0, 50),
          )
        }
      />
      <InkInput
        min={0}
        max={50}
        value={currentWall.doors}
        name="Portas"
        onChange={
          ({ target: { valueAsNumber } }) => setData.setDoors(
            formatValue(Math.floor(valueAsNumber), 0, 50),
          )
        }
      />
    </InputsContainer>
  );
  return (
    <Form>
      <div>
        <InkH2>Dimensões da parede</InkH2>
        <div className="line" />
        {WallInputs()}
      </div>
      <div>
        <InkH2>Portas e Janelas</InkH2>
        <div className="line" />
        {DoorsAndWindowsInputs()}
      </div>
    </Form>
  );
};

export default WallComputation;
