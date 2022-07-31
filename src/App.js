import React, { useState } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

import Routing from "./routing/Routing";
import FullScreenLoader from "./components/fullScreenLoader/FullScreenLoader";
const App = () => {
  const [preLoader, setPreLoader] = useState(false);
  return <div>{preLoader ? <FullScreenLoader /> : <Routing />}</div>;
};

export default App;
