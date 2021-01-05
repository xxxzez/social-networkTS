import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Navbar } from './components/Navbar/Navbar'
import { Settings } from './components/Settings/Settings'
import { Route } from 'react-router-dom'
import { News } from './components/News/News'
import { HeaderContainer } from './components/Header/HeaderContainer'
import { Grid } from '@material-ui/core'
import { DialogsContainer } from './components/Dialogs/DialogsContainer'
import { UsersContainer } from './components/Users/UsersContainer'
import { ProfileContainer } from './components/Profile/ProfileContainer'

export const App: React.FC = () => {
    return (
        <div>
            <CssBaseline />
            <HeaderContainer />
            <Grid container>
                <Navbar />
                <Grid item xs={10}>
                    <Route
                        path={'/profile/:userId?'}
                        render={() => <ProfileContainer />}
                    />
                    <Route
                        path={'/messages'}
                        render={() => <DialogsContainer />}
                    />
                    <Route path={'/users'} render={() => <UsersContainer />} />
                    <Route path={'/news'} render={() => <News />} />
                    <Route path={'/settings'} render={() => <Settings />} />
                </Grid>
            </Grid>
            {/* <Footer /> */}
        </div>
    )
}
