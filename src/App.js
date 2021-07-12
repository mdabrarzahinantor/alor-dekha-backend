import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import CreateBlog from "./Components/CreateBlog";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import CreatePoster from "./Components/CreatePoster";
import CreateAuthor from "./Components/CreateAuthor";
import Authors from "./Components/Authors";
import Admin from "./Components/Admin";
import { useEffect, useState } from "react";
import { auth } from "./Components/Firebase";
import { useStateValue } from "./Global/StateProvider";
import { actionTypes } from "./Global/Reducer";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      dispatch({ type: actionTypes.SET_USER, user: user });
    });
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/create-blog">
          <CreateBlog />
        </Route>
        <Route exact path="/create-poster">
          <CreatePoster />
        </Route>
        <Route exact path="/create-author">
          <CreateAuthor />
        </Route>
        <Route exact path="/authors">
          <Authors />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
