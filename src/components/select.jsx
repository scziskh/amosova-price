import { styled } from "styled-components";

const Select = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Select;

const Wrapper = styled.select`
  display: block;
  width: 260px;
  padding: 10px;
`;
