import React, { FC } from 'react';
import { Form, InputsContainer, InkH2 } from '@styles/inkCalculator';
import { WallComputation as WallCompType } from './_utils';
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

const WallComputation: FC<Props> = ({ currentWall, setData }) => {
  const WallInputs = () => (
    <InputsContainer>
      <InkInput
        min={1}
        max={15}
        value={currentWall.wall.height}
        name="Altura"
        onChange={({ target: { valueAsNumber } }) => setData.setHeight(valueAsNumber)}
      />
      <InkInput
        min={1}
        max={15}
        value={currentWall.wall.width}
        name="Largura"
        onChange={({ target: { valueAsNumber } }) => setData.setWidth(valueAsNumber)}
      />
    </InputsContainer>
  );

  const DoorsAndWindowsInputs = () => (
    <InputsContainer>
      <InkInput
        min={0}
        max={100}
        value={currentWall.windows}
        name="Janelas"
        onChange={({ target: { valueAsNumber } }) => setData.setWindows(valueAsNumber)}
      />
      <InkInput
        min={1}
        max={100}
        value={currentWall.doors}
        name="Portas"
        onChange={({ target: { valueAsNumber } }) => setData.setDoors(valueAsNumber)}
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
