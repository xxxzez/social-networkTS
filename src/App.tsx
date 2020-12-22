import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Navbar } from './components/Navbar/Navbar'
import { Settings } from '@material-ui/icons'
import { Route } from 'react-router-dom'
import { News } from './components/News/News'
import { Profile } from './components/Profile/Profile'
import { Header } from './components/Header/Header'
// import { Footer } from './components/Footer/Footer'
import { Grid } from '@material-ui/core'
import { DialogsContainer } from './components/Dialogs/DialogsContainer'

type PropsType = {}

export const App: React.FC<PropsType> = (props) => {

    return (
        <div>
            <CssBaseline />
            <Header />
            <Grid container>
                <Navbar />
                <Grid item xs={10}>
                    <Route
                        path={'/profile'}
                        render={() => (
                            <Profile
                            />
                        )}
                    />
                    <Route
                        path={'/messages'}
                        render={() => (
                            <DialogsContainer
                            />
                        )}
                    />
                    <Route path={'/news'} render={() => <News />} />
                    <Route path={'/settings'} render={() => <Settings />} />
                </Grid>
            </Grid>
            {/* <Footer /> */}
        </div>
    )
}
