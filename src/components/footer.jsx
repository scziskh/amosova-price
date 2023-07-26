import styled from "styled-components";

const Footer = (props) => {
  // get package.json version
  const { version } = require("../../package.json");

  return (
    <Wrapper>
      <P>price-amosova v. {version}</P>
    </Wrapper>
  );
};

const P = styled.div`
  width: 100%;
  text-align: right;
  color: white;
`;

const Wrapper = styled.footer`
  width: 100%;
  padding: 20px 100px;
  background-color: #212121;
  position: absolute;
  bottom: 0;
`;

export default Footer;
