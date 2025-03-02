import Head from "next/head";
import React from "react";
import Header from "@/components/header";
import HeroSection from "./HomeSections/hero";
import KeyFeatures from "./HomeSections/features";
import HowItWorks from "./HomeSections/HowItWorks";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>MoveIt - Better Task Management</title>
        <meta
          name="description"
          content="Better task management starts with MoveIt"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Header />
      <main className="flex-grow">
        <HeroSection />
        <KeyFeatures />
       <HowItWorks />
      </main>
    </div>
  );
};

export default Home;
