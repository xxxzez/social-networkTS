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

type NavbarItemType = {
    link: string
    title: string
}

const NavbarItem: React.FC<NavbarItemType> = (props) => {
    return (
        <div className={s.item}>
            <ListItem button key={props.title}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <Link component={NavLink} to={props.link}>
                    <ListItemText primary={props.title} />
                </Link>
            </ListItem>
        </div>
    )
}

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
                        <NavbarItem link={'/profile'} title={'Profile'} />
                        <NavbarItem link={'/messages'} title={'Messages'} />
                        <NavbarItem link={'/news'} title={'News feed'} />
                        <Divider />
                        <NavbarItem link={'/settings'} title={'Settings'} />
                    </List>
                </div>
            </Drawer>
        </div>
    )
}
