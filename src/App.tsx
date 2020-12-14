import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Navbar } from './components/Navbar/Navbar'
import { Settings } from '@material-ui/icons'
import { Route } from 'react-router-dom'
import { ActionsTypes, StoreType } from './Types'
import { Dialogs } from './components/Dialogs/Dialogs'
import { News } from './components/News/News'
import { Profile } from './components/Profile/Profile'
import { Container, Grid } from '@material-ui/core'
import { Header } from './components/Header/Header'

type PropsType = {
    store: StoreType
    dispatch: (action: ActionsTypes) => void
}

export const App: React.FC<PropsType> = (props) => {
    const state = props.store.getState()

    return (
        <div>
            <CssBaseline />
            <Header />
            <Container>
                <Grid container>
                    <Navbar />
                    <Grid item>
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
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
