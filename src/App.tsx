import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import { ActionsTypes, StoreType } from './Types'
import { Navbar } from './components/Navbar/Navbar'
import { Settings } from '@material-ui/icons'
import { Route } from 'react-router-dom'
import { Dialogs } from './components/Dialogs/Dialogs'
import { News } from './components/News/News'
import { Profile } from './components/Profile/Profile'
import state from './redux/state'

const drawerWidth = 240

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            zIndex: theme.zIndex.drawer + 1,
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        drawerContainer: {
            overflow: 'auto',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
    })
)

type PropsType = {
    store: StoreType
    dispatch: (action: ActionsTypes) => void
}

export const App: React.FC<PropsType> = (props) => {
    const classes = useStyles()
    const state = props.store.getState()

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Social Network
                    </Typography>
                </Toolbar>
            </AppBar>
            <Navbar />
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

            {/* <main className={classes.content}>
                <Toolbar />
                <Typography paragraph>
                    111
                </Typography>
            </main> */}
        </div>
    )
}

// import React from 'react'
// import { Route } from 'react-router-dom'
// import { ActionsTypes, StoreType } from './Types'
// import './App.css'
// import { Dialogs } from './components/Dialogs/Dialogs'
// import { Footer } from './components/Footer/Footer'
// import { Header } from './components/Header/Header'
// import { Navbar } from './components/Navbar/Navbar'
// import { News } from './components/News/News'
// import { Profile } from './components/Profile/Profile'
// import { Settings } from './components/Settings/Settings'

// export const App: React.FC<PropsType> = (props) => {
//     const state = props.store.getState()
//     return (
//         <div className="app">
//             <Header />
//             <div className="main">
//                 <Navbar />
//                 <div className="appContent">
//                     <Route
//                         path={'/profile'}
//                         render={() => (
//                             <Profile
//                                 posts={state.profilePage.posts}
//                                 newPostText={state.profilePage.newPostText}
//                                 dispatch={props.dispatch}
//                             />
//                         )}
//                     />
//                     <Route
//                         path={'/messages'}
//                         render={() => (
//                             <Dialogs
//                                 dialogs={state.dialogsPage.dialogs}
//                                 messages={state.dialogsPage.messages}
//                             />
//                         )}
//                     />
//                     <Route path={'/news'} render={() => <News />} />
//                     <Route path={'/settings'} render={() => <Settings />} />
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     )
// }
