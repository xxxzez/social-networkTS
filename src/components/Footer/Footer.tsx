import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Grid,
} from '@material-ui/core'
import React from 'react'
import s from './Footer.module.css'

export const Footer = () => {
    return (
        <footer>
            <Grid item xs={12}>
                <AppBar position="static" color="secondary">
                    <Toolbar>
                        <Typography variant="h6">
                            This project is made by Matvei Bohush
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Grid>
        </footer>
    )
}
