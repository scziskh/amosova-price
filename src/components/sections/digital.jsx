import { styled } from "styled-components";
import { uk } from "../../dictionary/uk";
import { formatList, paperList, printList, sidesList } from "../../params";
import InputNumber from "../input-number";
import Select from "../select";

const DigitalSection = (props) => {
  return (
    <>
      <h1>Цифровий друк</h1>
      <Wrapper>
        <Select>
          {paperList.map((paper) => (
            <option value={paper}>{uk.paper[paper]}</option>
          ))}
        </Select>
        <Select>
          {formatList.map((format) => (
            <option value={format}>{uk.format[format]}</option>
          ))}
        </Select>
        <Select>
          {printList.map((print) => (
            <option value={print}>{uk.print[print]}</option>
          ))}
        </Select>
        <Select>
          {sidesList.map((sides) => (
            <option value={sides}>{uk.sides[sides]}</option>
          ))}
        </Select>
        <InputNumber />
      </Wrapper>
    </>
  );
};

export default DigitalSection;

const Wrapper = styled.section`
  width: 90%;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  justify-content: center;
`;
