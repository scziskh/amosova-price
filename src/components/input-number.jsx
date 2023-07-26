import { styled } from "styled-components";

const InputNumber = (props) => {
  return <Input type="number" min={0} />;
};

export default InputNumber;

const Input = styled.input`
  display: block;
  padding: 10px;
  width: 100px;
`;
