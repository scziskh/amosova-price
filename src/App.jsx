import { styled } from "styled-components";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import DigitalSection from "./components/sections/digital";

const App = () => {
  return (
    <Wrapper className="App">
      <Header />
      <DigitalSection />
      <Footer />
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div``;
