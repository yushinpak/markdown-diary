import styled from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
  margin?: string;
  padding?: string;
  onClick?: () => void;
}

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "10px 10px"};
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
  onClick,
  children,
}) => {
  return (
    <StyledButton margin={margin} padding={padding} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
