import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { RootStateType } from "./Types"
import { addPost, updateNewPostText } from "./redux/state"

export const renderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    addPost={addPost}
                    updateNewPostText={updateNewPostText}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById("root")
    )
}
