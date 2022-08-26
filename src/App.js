import React, { useRef } from "react";
import { GlobalProvider } from "./context/GlobalState";
import Header from "./components/Header";
import Form from "./components/Form";
import About from "./components/About";
import Results from "./components/Results";
import "./App.css";

const App = () => {
  const formRef = useRef(null);
  const aboutRef = useRef(null);
  const resultRef = useRef(null);
  return (
    <GlobalProvider>
      <div className="container">
        <Header />
        <Form ref={formRef} aboutRef={aboutRef} resultRef={resultRef} />
        <About ref={aboutRef} formRef={formRef} />
        <Results ref={resultRef} formRef={formRef} />
      </div>
    </GlobalProvider>
  );
};

export default App;
