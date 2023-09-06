import "@/styles/globals.css";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Head from "next/head";

const App = ({ Component, pageProps, router }) => {
  const [language, setLanguage] = useState(true);
  return (
    <div className="text-white atyp">
      <Head>
        <title> Portfolio | CARLOS BASO</title>
      </Head>
      {/* NAVBAR-------------------------------------------------------------------------------------------------------- */}
      <Navbar language={language} setLanguage={setLanguage} />
      {/* PAGES-------------------------------------------------------------------------------------------------------- */}
      <Component
        key={router.pathname}
        {...pageProps}
        language={language}
        setLanguage={setLanguage}
      />
  
    </div>
  );
};

export default App;
