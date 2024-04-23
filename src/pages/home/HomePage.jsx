import React from "react";

import MainLayout from "../../components/MainLayout";
import Hero from "./container/Hero";
import { Articles } from "./container/Articles"; // Import the named export

import CTA from "./container/CTA";

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <Articles />
      <CTA />
    </MainLayout>
  );
};

export default HomePage;