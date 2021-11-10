import styled from 'styled-components';

export const InkCalcContainer = styled.div`
  margin-block: 10px;
  margin: 0 auto;
  max-width: 100%;
  box-sizing: border-box;
  border-radius: 8px;
  box-sizing: border-box;
  border: 1px solid ${({ theme: { primary } }) => primary};
  color: ${({ theme: { primary } }) => primary};
  padding: 20px;
`;

export const InkCalcTitle = styled.h1`
  margin: 0 0 20px 0;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme: { primary } }) => primary};
`;

export const InkH2 = styled.h2`
  margin: 4px;
  font-size: 15px;
  text-align: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  margin-block: 20px;
  justify-content: space-evenly;
  flex-flow: row wrap;
  & > * {
    margin-inline: 2px;
  }
`;

export const InkCalcWallButton = styled.button<{ selected?: boolean }>`
  font-size: 14px;
  padding: 12px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: color 0.2s, background 0.2s;
  color: ${({ theme: { primary2, primary }, selected }) => (selected ? primary2 : primary)};
  background: ${({ theme: { primary2, primary }, selected }) => (selected ? primary : primary2)};

  :active {
    background: #be5c00;
  }

  :hover {
    background: ${({ theme: { primary } }) => primary};
    color: white;
  }
`;

export const Form = styled.form`
  .line {
    height: 1px;
    margin-top: 0;
    margin-inline: auto;
    max-width: 200px;
    background: ${({ theme }) => theme.primary};
  }
`;

export const InkInputContainer = styled.label`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  font-size: 14px;
  min-width: 200px;
  max-width: 200px;
  span {
    margin: 5px 0;
    font-weight: 500;
  }
`;

export const Input = styled.input`
  border: 2px solid ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primary};
  border-radius: 8px;
  font-weight: 600;
  box-sizing: border-box;
  font-size: 14px;
  outline: none;
  padding: 8px;
  width: 100%;
  text-align: center;
  transition: border 0.2s;

  :focus {
    border: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

export const MessageErrorContainer = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 8px;
  background: hsl(0, 100%, 90%);
  color: hsl(0, 50%, 30%);
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-flow: column;
  overflow-y: auto;
  padding: 20px;
  max-height: 450px;
  overflow-y: auto;

  color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 8px;

  ul { padding: 0 }

  h3 { margin: 0; }
`;
