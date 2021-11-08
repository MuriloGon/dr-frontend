import React, { FC } from 'react';
import { InkInputContainer, Input } from '@styles/inkCalculator';

type Props = {
  name: string;
  min: number;
  max: number;
  value: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

const InkInput: FC<Props> = ({ name, onChange, min, max, value }) => {
  return (
    <InkInputContainer>
      <span>{name}</span>
      <Input min={min} max={max} value={value} onChange={onChange} type="number" />
    </InkInputContainer>
  );
}

export default InkInput;
