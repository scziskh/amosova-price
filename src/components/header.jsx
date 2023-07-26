import styled from "styled-components";

const Header = (props) => {
  return (
    <Wrapper>
      <Img src="/logo.svg" alt="COPY SHOP" width={`95px`} height={`64px`} />
    </Wrapper>
  );
};

const Img = styled.img``;

const Wrapper = styled.header`
  width: 100%;
  display: flex;
  padding: 20px;
  background-color: #212121;
`;

export default Header;
