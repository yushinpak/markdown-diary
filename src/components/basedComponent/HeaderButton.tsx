import styled from "styled-components";
import { Link } from "react-router-dom";

interface HeaderButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  to?: string;
}

const StyledHeaderButton = styled(Link)<HeaderButtonProps>`
  padding: 0 10px;
  color: var(--color-white);
  background-color: transparent;
  border: none;
  cursor: pointer;
  text-decoration: none;
  font-size: var(--font-size-sm2);
  font-weight: var(--font-weight-medium);
`;

const HeaderButton: React.FC<HeaderButtonProps> = ({ onClick, children, to}) => {
  return <StyledHeaderButton to={to} onClick={onClick}>{children}</StyledHeaderButton>;
};

export default HeaderButton;
