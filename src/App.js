import React from "react";
import { Switch, Route, Link, Router, BrowserRouter } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import {
  Navbar,
  Exchanges,
  Homepage,
  Cryptocurriencies,
  News,
  CryptoDetails,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="router">
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/exchanges">
                <Exchanges />
              </Route>
              <Route exact path="/cryptocurrencies">
                <Cryptocurriencies />
              </Route>
              <Route exact path="/crypto/:coinId">
                <CryptoDetails />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
      </div>
      <div className="footer">
        <Typography.Title
          level={5}
          style={{ color: "white", textAlign: "centre" }}
        >
          Cryptoverse <br />
          All rights reservered
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
  );
};

export default App;
