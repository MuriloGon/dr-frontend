import React, { FC, useEffect, useState } from 'react';
import { totalInk, calcMinimumInkCans } from '@services/inkCalculator';
import { InkCalcWallButton } from '@styles/inkCalculator';
import { Walls } from '../_utils';

type Props = {
  walls: Walls;
  doorDimensions: { width: number, height: number };
  windowDimensions: { width: number, height: number };
  // eslint-disable-next-line react/no-unused-prop-types
  resetComputations: () => void;
};

enum CalcState {
  initial,
  computed,
}

const inkCans = [
  { value: 0.5, label: '0.5L' },
  { value: 2.5, label: '2.5L' },
  { value: 3.6, label: '3.6L' },
  { value: 18, label: '18L' },
];

const initialResultState = {
  totalInk: 0,
  totalCurrentCan: 0,
  totalCans: {
    18: 0, 3.6: 0, 2.5: 0, 0.5: 0,
  },
};

const ComputeInk: FC<Props> = ({
  walls, windowDimensions, doorDimensions, /* resetComputations, */
}) => {
  const [calcState, setCalcState] = useState<CalcState>(CalcState.initial);
  const [canSize, setCanSize] = useState(0.5);
  const [result, setResult] = useState(initialResultState);

  function computeInk() {
    const subTotalsLiters: Array<number> = [];
    const keys = Object.keys(walls);
    keys.forEach((key) => {
      const { doors: doorsN, wall, windows: windowsN } = (walls as any)[key];
      const doors = Array(doorsN).fill(windowDimensions);
      const windows = Array(windowsN).fill(doorDimensions);
      subTotalsLiters.push(totalInk(wall, doors, windows));
    });
    const totalInkLiters = subTotalsLiters.reduce((acc, value) => acc + value);
    const cans = calcMinimumInkCans(totalInkLiters, inkCans.map((x) => x.value));
    setResult({
      totalInk: totalInkLiters,
      totalCurrentCan: totalInkLiters / canSize,
      totalCans: cans as typeof result.totalCans,
    });
  }

  useEffect(() => {
    computeInk();
  }, []);

  const Confirmation = () => (
    <div className="compute-forms">
      <div className="compute-forms-content">

        <h3>Calcular Latas de Tinta</h3>
        <label htmlFor="can-selection">
          Tamanho da lata
          <select
            id="can-selection"
            value={canSize}
            onChange={({ target: { value } }) => setCanSize(Number(value))}
          >
            {inkCans.map(({ label, value }, i) => (
              <option key={i} value={value}>{label}</option>))}
          </select>

        </label>
      </div>
      <div className="compute-action-btns">
        <InkCalcWallButton
          type="button"
          onClick={() => {
            computeInk();
            setCalcState(CalcState.computed);
          }}
        >
          Calcular
        </InkCalcWallButton>
      </div>
    </div>
  );

  const ResultComp = () => (
    <div className="compute-forms">
      <div className="compute-forms-content">
        <div>
          <h3>Total de Tinta:</h3>
          <p>{`${result.totalInk} Litros`}</p>
        </div>
        <div>
          <h3>{`Total latas de ${canSize}L:`}</h3>
          <p>{`${Math.ceil(result.totalCurrentCan)} Latas`}</p>
        </div>
        <div>
          <h3>Mínimo de latas de cada tipo:</h3>
          <ul>
            {
            Object.entries(result.totalCans).map(([key, cans], i) => (
              <li key={`optimal-can-${i}`}>
                <b>{`Lata ${key}L: `}</b>
                {`${cans}`}
              </li>
            ))
          }
          </ul>
        </div>
      </div>
      <div className="compute-action-btns">
        <InkCalcWallButton
          type="button"
          onClick={() => {
            setCalcState(CalcState.initial);
            // resetComputations();
          }}
        >
          Reiniciar
        </InkCalcWallButton>

        <InkCalcWallButton
          type="button"
          onClick={() => setCalcState(CalcState.initial)}
        >
          Salvar Resultado
        </InkCalcWallButton>
      </div>
    </div>
  );

  return (
    <>
      {calcState === CalcState.initial ? (
        <Confirmation />
      ) : <ResultComp />}

    </>
  );
};

export default ComputeInk;
