import React from 'react'
import { Route } from 'react-router-dom'
import { ActionsTypes, StoreType } from './Types'
import './App.css'
import { Dialogs } from './components/Dialogs/Dialogs'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { Navbar } from './components/Navbar/Navbar'
import { News } from './components/News/News'
import { Profile } from './components/Profile/Profile'
import { Settings } from './components/Settings/Settings'

type PropsType = {
    store: StoreType
    dispatch: (action: ActionsTypes) => void
}

export const App: React.FC<PropsType> = (props) => {
    const state = props.store.getState()
    return (
        <div className="app">
            <Header />
            <div className="main">
                <Navbar />
                <div className="appContent">
                    <Route
                        path={'/profile'}
                        render={() => (
                            <Profile
                                posts={state.profilePage.posts}
                                newPostText={state.profilePage.newPostText}
                                dispatch={props.dispatch}
                            />
                        )}
                    />
                    <Route
                        path={'/messages'}
                        render={() => (
                            <Dialogs
                                dialogs={state.dialogsPage.dialogs}
                                messages={state.dialogsPage.messages}
                            />
                        )}
                    />
                    <Route path={'/news'} render={() => <News />} />
                    <Route path={'/settings'} render={() => <Settings />} />
                </div>
            </div>
            <Footer />
        </div>
    )
}
