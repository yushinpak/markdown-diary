import styled from "styled-components";

interface HeaderButtonProps {
  children?: React.ReactNode;
  onclick?: () => void;
}

const StyledHeaderButton = styled.button<HeaderButtonProps>`
padding: 0 10px;
color: var(--color-white);
// color: black;
background-color: transparent;
border: none;
`;

const HeaderButton: React.FC<HeaderButtonProps> = ({ onclick, children }) => {
  return <StyledHeaderButton onclick={onclick}>{children}</StyledHeaderButton>;
};

export default HeaderButton;
