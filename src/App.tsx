import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Navbar />
                <div className="App-content">
                    <Route path={'/profile'} render={ () => <Profile />} />
                    <Route path={'/messages'} render={ () => <Dialogs />} />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
