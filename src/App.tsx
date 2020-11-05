import React from "react"
import { Route } from "react-router-dom"
import { RootStateType } from "./Types"
import "./App.css"
import Dialogs from "./components/Dialogs/Dialogs"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Navbar from "./components/Navbar/Navbar"
import News from "./components/News/News"
import Profile from "./components/Profile/Profile"
import Settings from "./components/Settings/Settings"

type PropsType = {
    state: RootStateType
    addPost: (text: string) => void
    updateNewPostText: (text: string) => void
}

const App: React.FC<PropsType> = (props) => {
    return (
        <div className="app">
            <Header />
            <div className="main">
                <Navbar />
                <div className="appContent">
                    <Route
                        path={"/profile"}
                        render={() => (
                            <Profile
                                posts={props.state.profilePage.posts}
                                addPost={props.addPost}
                                updateNewPostText={props.updateNewPostText}
                                newPostText={props.state.profilePage.newPostText}
                            />
                        )}
                    />
                    <Route
                        path={"/messages"}
                        render={() => (
                            <Dialogs
                                dialogs={props.state.dialogsPage.dialogs}
                                messages={props.state.dialogsPage.messages}
                            />
                        )}
                    />
                    <Route path={"/news"} render={() => <News />} />
                    <Route path={"/settings"} render={() => <Settings />} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default App
