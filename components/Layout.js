import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { MenuBook } from '@material-ui/icons';
import { useStyles } from '../utils/styles';
import { Container, CssBaseline, Grid } from '@material-ui/core';
import Head from 'next/head';

export default function Layout({ title, description, children }) {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>{title ? title : 'Izmir Celta'}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Grid container>
              <Grid item lg={1} sm={1}>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                >
                  <MenuBook />
                </IconButton>
              </Grid>
              <Grid
                lg={8}
                alignItems="center"
                sm={8}
                className={classes.title}
                container
                item
                justifyContent="center"
                spacing={10}
              >
                <Grid item>
                  <Typography variant="h6">Online Courses</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">Test</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">Test</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">Test</Typography>
                </Grid>
              </Grid>
              <Grid
                className={classes.icons}
                container
                item
                spacing={3}
                md={2}
                sm={3}
                lg={3}
                justifyContent="flex-end"
                alignItems="center"
              >
                <Grid item>icon</Grid>
                <Grid item>icon</Grid>
                <Grid item>icon</Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>All rights reserved. Next Izmir Celta</Typography>
        </footer>
      </div>
    </>
  );
}
