import React, { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Content/Hero";

const Index = () => {
  const [active, setActive] = useState(1);
  return (
    <>
      <Header active={active} setactive={setActive} />
      <Hero />
    </>
  );
};

export default Index;
