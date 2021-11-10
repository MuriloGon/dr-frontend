import React, { FC } from 'react';
import { InkInputContainer, Input } from '@styles/inkCalculator';

type Props = {
  name: string;
  min: number;
  step?: number;
  max: number;
  value: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>
};

const InkInput: FC<Props> = ({
  name, onChange, min, max, value, step = 1,
}) => (
  <InkInputContainer>
    <span>{name}</span>
    <Input
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={onChange}
      type="number"
    />
  </InkInputContainer>
);

export default InkInput;
