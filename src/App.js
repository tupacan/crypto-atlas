import React from "react";
import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";

import { Navbar, Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails } from "./components";
import "./App.css";
import Footer from "./components/Footer";

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
                <Footer />
            </main>
        </div>
    );
};

export default App;
