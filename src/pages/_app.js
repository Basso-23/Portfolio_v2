import "@/styles/globals.css";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import Head from "next/head";



const App = ({ Component, pageProps, router }) => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("home");
  const [theme, setTheme] = useState(false);
  const [language, setLanguage] = useState(true);

  return (
    <div>
      <Menu
        toggle={toggle}
        setToggle={setToggle}
        active={active}
        setActive={setActive}
        theme={theme}
        setTheme={setTheme}
        language={language}
        setLanguage={setLanguage}
      />
      <Navbar
        toggle={toggle}
        setToggle={setToggle}
        active={active}
        setActive={setActive}
        theme={theme}
        setTheme={setTheme}
        language={language}
        setLanguage={setLanguage}
      />
      <Component
        key={router.pathname}
        {...pageProps}
        toggle={toggle}
        setToggle={setToggle}
        active={active}
        setActive={setActive}
        theme={theme}
        setTheme={setTheme}
        language={language}
        setLanguage={setLanguage}
      />
    </div>
  );
};

export default App;
