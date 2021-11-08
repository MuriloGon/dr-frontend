import styled from 'styled-components';

export const InkCalcContainer = styled.div`
  max-width: 100%;
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

export const InkCalcWallButton = styled.button<{ selected?: boolean }>`
  font-size: 14px;
  padding: 12px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  transition: color 0.2s, background 0.2s;
  color: ${({ theme: { primary2, primary }, selected }) => selected ? primary2 : primary};
  background: ${({ theme: { primary2, primary }, selected }) => selected ? primary : primary2};

  :active {
    background: #be5c00;
  }

  :hover {
    background: ${({ theme: { primary } }) => primary};
    color: white;
  }
`;

export const Form = styled.form`
  margin-top: 10px;

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
