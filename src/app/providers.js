"use client";
import { useState } from "react";
import Navigation from "./components/Navigation";

export default function Provider() {
  const [selectedTab, changeTab] = useState("/");

  return (
    <Navigation
      onClick={(tabName) => changeTab(tabName)}
      selectedTab={selectedTab}
    />
  );
}
