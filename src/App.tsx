import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import "./App.css"
import Dialogs from "./components/Dialogs/Dialogs"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import News from "./components/News/News"
import Profile from "./components/Profile/Profile"
import Settings from "./components/Settings/Settings"

const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <Header />
                <div className="main">
                    <Navbar />
                    <div className="appContent">
                        <Route path={"/profile"} render={() => <Profile />} />
                        <Route path={"/messages"} render={() => <Dialogs />} />
                        <Route path={"/news"} render={() => <News />} />
                        <Route path={"/settings"} render={() => <Settings />} />
                    </div>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App
