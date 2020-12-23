import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Link,
    Grid,
} from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import ChatIcon from '@material-ui/icons/Chat'
import SettingsIcon from '@material-ui/icons/Settings'
import LineWeightIcon from '@material-ui/icons/LineWeight'
import GroupIcon from '@material-ui/icons/Group'

type NavbarItemType = {
    link: string
    title: string
}

const NavbarItem: React.FC<NavbarItemType> = (props) => {
    const iconRender = (title: string) => {
        switch (title) {
            case 'Profile':
                return <AccountBoxIcon />
            case 'Messages':
                return <ChatIcon />
            case 'News feed':
                return <LineWeightIcon />
            case 'Settings':
                return <SettingsIcon />
            case 'Users':
                return <GroupIcon />
        }
    }
    return (
        <div className={s.item}>
            <ListItem button key={props.title}>
                <ListItemIcon>{iconRender(props.title)}</ListItemIcon>
                <Link component={NavLink} to={props.link}>
                    <ListItemText primary={props.title} />
                </Link>
            </ListItem>
        </div>
    )
}

export const Navbar = () => {
    return (
        <Grid item xs={2}>
            <List>
                <NavbarItem link={'/profile'} title={'Profile'} />
                <Divider />
                <NavbarItem link={'/messages'} title={'Messages'} />
                <Divider />
                <NavbarItem link={'/news'} title={'News feed'} />
                <Divider />
                <NavbarItem link={'/users'} title={'Users'} />
                <Divider />
                <NavbarItem link={'/settings'} title={'Settings'} />
            </List>
        </Grid>
    )
}
