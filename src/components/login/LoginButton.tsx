import styled from "styled-components";
import { Link } from "react-router-dom";

interface ButtonProps {
  children?: React.ReactNode;
  margin?: string;
  padding?: string;
  onclick?: () => void;
  to?: string;
}

const StyledButton = styled(Link)<ButtonProps>`
  display: flex;
  align-items: center;
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0 10px"};
  font-size: var(--font-size-sm2);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text);
  background-color: transparent;
  border: none;
  border-bottom: var(--color-point) 2px solid;
  cursor: pointer;
  text-decoration: none;
`;

const Button: React.FC<ButtonProps> = ({
  margin,
  padding,
  onclick,
  children,
  to,
}) => {
  return (
    <StyledButton to={to} margin={margin} padding={padding} onclick={onclick}>
      {children}
    </StyledButton>
  );
};

export default Button;
