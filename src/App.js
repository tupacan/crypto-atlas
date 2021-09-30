import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";

import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails } from "./components";
import "./App.css";

const App = () => {
    return (
        <div className="app">
            <header className="navbar">
                <Navbar />
            </header>

            <main className="main">
                <Layout>
                    <div className="routes">
                        <Switch>
                            <Route exact path="/">
                                <Homepage />
                            </Route>
                            <Route exact path="/exchanges">
                                <Exchanges />
                            </Route>
                            <Route exact path="/cryptocurrencies">
                                <Cryptocurrencies />
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

                <div className="footer">
                    <Typography.Title level={4} style={{ color: "white", textAlign: "center" }}>
                        CryptoAtlas
                    </Typography.Title>
                    <Space>
                        <Link to="/">Home</Link>
                        <Link to="/exchanges">Exchanges</Link>
                        <Link to="/news">News</Link>
                    </Space>
                    <Typography.Link
                        href="https://www.vecteezy.com/free-vector/crypto-logo"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ marginTop: 10 }}
                    >
                        Crypto Logo Vectors by Vecteezy
                    </Typography.Link>
                </div>
            </main>
        </div>
    );
};

export default App;
