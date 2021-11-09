import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  --size: 150px;
  display: grid;
  grid-template-columns: var(--size) 1fr var(--size);
  grid-template-areas: ". b c";
  padding-block: 10px;
  place-items: center;

  & > *:nth-child(1) { grid-area: b; }
  & > *:nth-child(2) { grid-area: c; }

  span {
    display: inline-block;
    height: 100%;
  }

  @media screen and (max-width: 550px) {
    grid-template-areas: "b c";
    grid-template-columns: 1fr min-content;
  }
`;

const borderRound = (side: 'left' | 'right' | 'all', size: number) => {
  switch (side) {
    case 'left': return `${size}px 0 0 ${size}px`;
    case 'right': return `0 ${size}px ${size}px 0`;
    case 'all': return `${size}px`;
    default: return 'none';
  }
};

export const NavButton = styled.button<{
  rounded: 'right' | 'left' | 'all'
  selected?: boolean;
}>`
  padding: 8px;
  box-sizing: border-box;
  width: max-content;
  border: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  background: ${({ theme, selected = false }) => (selected ? theme.primary : theme.primary2)};
  color: ${({ theme, selected = false }) => (!selected ? theme.primary : theme.primary2)};
  border-radius: ${({ rounded }) => borderRound(rounded, 8)} ;
  transition: color ease-in-out 0.1s, background-color ease-in-out 0.1s;

  :hover {
    color: ${({ theme }) => theme.primary2};
    background: ${({ theme }) => theme.secondary};
  }  
`;
