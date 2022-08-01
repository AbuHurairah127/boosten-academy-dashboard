import React, { useState, useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Routing from "./routing/Routing";
import FullScreenLoader from "./components/fullScreenLoader/FullScreenLoader";
import { fetchUser } from "./store/actions/authAction";
const App = () => {
  const isUserAuthenticated = useSelector(
    (store) => store.authReducer.isUserAuthenticated
  );
  const dispatch = useDispatch();
  const [preLoader, setPreLoader] = useState(false);
  useEffect(() => {
    isUserAuthenticated && dispatch(fetchUser(setPreLoader));
  }, [dispatch]);

  return <div>{preLoader ? <FullScreenLoader /> : <Routing />}</div>;
};

export default App;
