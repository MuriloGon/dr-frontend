import React, { FC } from 'react';
import { Form } from '@styles/inkCalculator';
import { Wall, WallComputation as WallCompType } from './_utils';
import InkInput from './InkInput';

type Props = {
  wallName: Wall;
  currentWall: WallCompType,
  setData: {
    setHeight: (height: number) => void,
    setWidth: (width: number) => void,
    setDoors: (doors: number) => void,
    setWindows: (windows: number) => void
  }
};

const WallComputation: FC<Props> = ({ wallName, currentWall, setData }) => {
  const st = { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', justifyItems: 'center' };
  return (
    <Form>
      <div>
        <h3 style={{ textAlign: 'center', margin: '5px 0' }}>
          Parede
          {' '}
          {wallName}
        </h3>
        <div className="line" />
        <div style={st}>
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
        </div>
      </div>
      <div>
        <h3 style={{ textAlign: 'center', margin: '5px 0' }}>Portas e Janelas</h3>
        <div className="line" />
        <div style={st}>
          <InkInput
            min={1}
            max={15}
            value={currentWall.windows}
            name="Janelas"
            onChange={({ target: { valueAsNumber } }) => setData.setWindows(valueAsNumber)}
          />
          <InkInput
            min={1}
            max={15}
            value={currentWall.doors}
            name="Portas"
            onChange={({ target: { valueAsNumber } }) => setData.setDoors(valueAsNumber)}
          />
        </div>
      </div>
    </Form>
  );
};

export default WallComputation;
