import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Menu from "../components/layout/Menu";
import Content from "../components/layout/Content";

import DataContent, { data } from "../data/DataContext";

const App = (props) => {

    const [state, setState] = useState(data)

  return (
    <DataContent.Provider value={{state, setState}}>
      <div className="App">
        <Router>
          <Menu />
          <Content />
        </Router>
      </div>
    </DataContent.Provider>
  );
};

export default App;
