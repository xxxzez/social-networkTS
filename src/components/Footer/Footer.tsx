import { AppBar, Toolbar, Typography, Grid } from '@material-ui/core'
import React from 'react'

export const Footer: React.FC = () => {
    return (
        <footer>
            <Grid item xs={12}>
                <AppBar position="static" color="primary">
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
