import {
    Drawer,
    Toolbar,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Link,
} from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'
import s from './Navbar.module.css'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import { Profile } from '../Profile/Profile'

type NavbarItemType = {
    link: string
    title: string
}

// const NavbarItem: React.FC<NavbarItemType> = (props) => {
//     return (
//         <div className={s.item}>
//
//             <NavLink to={`/${props.link}`}>{props.title}</NavLink>
//         </div>
//     )
// }

export const Navbar = () => {
    return (
        <div className={s.nav}>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <List>
                        <ListItem button key={'Profile'}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <Link component={Profile} to="/profile">
                                Profile
                            </Link>
                            <ListItemText primary={'Profile'} />
                        </ListItem>

                        <ListItem button key={'Messages'}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Messages'} />
                        </ListItem>

                        <ListItem button key={'News feed'}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={'News feed'} />
                        </ListItem>
                        <Divider />
                        <ListItem button key={'Settings'}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Settings'} />
                        </ListItem>
                    </List>
                </div>
            </Drawer>

            {/* <NavbarItem link="profile" title="Profile" />
            <NavbarItem link="messages" title="Messages" />
            <NavbarItem link="news" title="News feed" />
            <NavbarItem link="settings" title="Settings" /> */}
        </div>
    )
}
