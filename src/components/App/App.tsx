import React, { useState } from "react";
import Tree from "../Tree/Tree";
import "./App.css";

interface AppProps {}

const App: React.FunctionComponent<AppProps> = () => {
  return (
    <div className="container py-2">
      <Tree />
    </div>
  );
};

export default App;
