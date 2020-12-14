import {
    Drawer,
    Toolbar,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
} from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'
import s from './Navbar.module.css'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
type NavbarItemType = {
    link: string
    title: string
}

// const NavbarItem: React.FC<NavbarItemType> = (props) => {
//     return (
//         <div className={s.item}>
//             {/* <div className={s.icon}>
//                 <img src={icon} alt="" />
//             </div> */}
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
                        {['Profile', 'Messages', 'News feed', 'Drafts'].map(
                            (text, index) => (
                                <ListItem button key={text}>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? (
                                            <InboxIcon />
                                        ) : (
                                            <MailIcon />
                                        )}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            )
                        )}
                    </List>
                    <Divider />
                    <List>
                        {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    {index % 2 === 0 ? (
                                        <InboxIcon />
                                    ) : (
                                        <MailIcon />
                                    )}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
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
