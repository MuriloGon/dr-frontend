import styled from 'styled-components';

export const InkCard = styled.div`
  color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 8px;
  padding: 10px;
  font-weight: 500;
  margin-bottom: 10px;
`;
