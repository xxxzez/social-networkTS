import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Navbar } from './components/Navbar/Navbar'
import { Settings } from './components/Settings/Settings'
import { Route, withRouter } from 'react-router-dom'
import { News } from './components/News/News'
import { HeaderContainer } from './components/Header/HeaderContainer'
import { Grid } from '@material-ui/core'
import { DialogsContainer } from './components/Dialogs/DialogsContainer'
import { UsersContainer } from './components/Users/UsersContainer'
import { ProfileContainer } from './components/Profile/ProfileContainer'
import { ConnectedLogin } from './components/Login/Login'
import { initializeApp } from './redux/app-reducer'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { RootStateType } from './Types'
import { Preloader } from './components/common/Preloader/Preloader'

export class SimpleApp extends React.Component<any> {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }
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
                        <Route
                            path={'/users'}
                            render={() => <UsersContainer />}
                        />
                        <Route path={'/news'} render={() => <News />} />
                        <Route path={'/settings'} render={() => <Settings />} />
                        <Route
                            path={'/login'}
                            render={() => <ConnectedLogin />}
                        />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state: RootStateType) => ({
    initialized: state.app.initialized,
})
export const App = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, { initializeApp })
)(SimpleApp)
