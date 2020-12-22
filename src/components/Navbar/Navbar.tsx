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
import ChatIcon from '@material-ui/icons/Chat';
import SettingsIcon from '@material-ui/icons/Settings';
import LineWeightIcon from '@material-ui/icons/LineWeight';

type NavbarItemType = {
    link: string
    title: string
}

// const NavbarItem: React.FC<NavbarItemType> = (props) => {
//     return (
//         <div className={s.item}>
//             <ListItem button key={props.title}>
//                 <ListItemIcon>
//                     <AccountBoxIcon />
//                 </ListItemIcon>
//                 <Link component={NavLink} to={props.link}>
//                     <ListItemText primary={props.title} />
//                 </Link>
//             </ListItem>
//         </div>
//     )
// }

export const Navbar = () => {
    return (
        <Grid item xs={2}>
            <List>
                <div className={s.item}>
                    <ListItem button key={'Profile'}>
                        <ListItemIcon>
                            <AccountBoxIcon />
                        </ListItemIcon>
                        <Link component={NavLink} to={'/profile'}>
                            <ListItemText primary={'Profile'} />
                        </Link>
                    </ListItem>
                </div>
                <div className={s.item}>
                    <ListItem button key={'Messages'}>
                        <ListItemIcon>
                            <ChatIcon />
                        </ListItemIcon>
                        <Link component={NavLink} to={'/messages'}>
                            <ListItemText primary={'Messages'} />
                        </Link>
                    </ListItem>
                </div>
                <div className={s.item}>
                    <ListItem button key={'News feed'}>
                        <ListItemIcon>
                            <LineWeightIcon />
                        </ListItemIcon>
                        <Link component={NavLink} to={'/news'}>
                            <ListItemText primary={'News feed'} />
                        </Link>
                    </ListItem>
                </div>
                <Divider />
                <div className={s.item}>
                    <ListItem button key={'Settings'}>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <Link component={NavLink} to={'/settings'}>
                            <ListItemText primary={'Settings'} />
                        </Link>
                    </ListItem>
                </div>
            </List>
        </Grid>
    )
}
