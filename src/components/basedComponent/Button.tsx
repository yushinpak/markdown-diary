import styled from "styled-components";

interface ButtonProps {
  children?: React.ReactNode;
  margin?: string;
  padding?: string;
  onclick?: () => void;
}

const StyledButton = styled.button<ButtonProps>`
  // margin: 10px 5px;
  padding: 10px 10px;
  // color: var(--color-white);
  color: black;
  background-color: transparent;
  border: none;
  border-bottom: var(--color-point) 2px solid;
`;

const Button: React.FC<ButtonProps> = ({
  margin,
  padding,
  onclick,
  children,
}) => {
  return (
    <StyledButton margin={margin} padding={padding} onclick={onclick}>
      {children}
    </StyledButton>
  );
};

export default Button;
