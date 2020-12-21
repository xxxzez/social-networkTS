import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import React from 'react'
import s from './Header.module.css'

export const Header = () => {
    return (
        <header className={s.header}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <Menu />
                    </IconButton>
                    <Typography variant="h6">Social Network</Typography>
                </Toolbar>
            </AppBar>
        </header>
    )
}
