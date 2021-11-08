import styled from 'styled-components';


export const InkCalcContainer = styled.div`
  max-width: 100%;
  border-radius: 8px;
  box-sizing: border-box;
  border: 1px solid ${({ theme: { primary } }) => primary};
  color: ${({ theme: { primary } }) => primary};
  padding: 14px;
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
