import React, { FC } from 'react';
import ValidationError from './ValidationError';

type ErrorMessage = {
  wallName: string;
  validations: ({ valid: boolean; message: string; })[];
};

type Props = {
  wallsErrors: ErrorMessage[]
};

const ErrorsLog: FC<Props> = ({ wallsErrors }) => {
  const withErros = wallsErrors.filter(({ validations }) => validations.length > 0);
  return (
    <>
      {withErros.map(({ wallName, validations }, i) => (
        <div key={`${wallName}-${i}`}>
          <h3>
            Parede
            {' '}
            {wallName}
          </h3>
          <ul>
            {validations.map(({ message }, i2) => (
              <ValidationError key={`error-${wallName}-${i2}`} message={message} />))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default ErrorsLog;
