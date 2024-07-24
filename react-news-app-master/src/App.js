import React from "react";
import { v4 as uuidv4 } from "uuid";
import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { router } from "./config/config";
import Search from "./components/Search/Search";
import PowerBIContainer from "./components/PowerBI/PBI";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
        {router.map((path) => {
          return path.path === "/power-bi" ? (
            <Route
              exact
              key={uuidv4()}
              path={path.path}
              element={
                      <PowerBIContainer
                      link={path.list[0]}
                      />
                      }
            />
          ) : (
            <Route
              key={uuidv4()}
              path={path.path}
              element={
                <Routes>
                  {path.list.map((list_router) => (
                    <Route
                      exact
                      key={uuidv4()}
                      path={list_router.path}
                      element={
                        <News
                          key={list_router.key}
                          official={list_router.official}
                          child={list_router.child}
                        />
                      }
                    />
                  ))}
                </Routes>
              }
            />
          );
        })}
          <Route path="/search/:query" element={<Search />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
