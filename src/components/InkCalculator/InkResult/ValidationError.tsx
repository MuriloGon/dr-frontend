import { MessageErrorContainer } from '@styles/inkCalculator';
import React, { FC } from 'react';

type Props = {
  message: string;
};

const ValidationError: FC<Props> = ({ message }) => (
  <MessageErrorContainer>
    {message}
  </MessageErrorContainer>
);

export default ValidationError;
