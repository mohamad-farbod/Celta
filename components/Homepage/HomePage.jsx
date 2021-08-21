import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  Paper,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CoursesImage from './courses.jpg';
import styles from './Homepage.module.scss';
import { courseDates } from './HomePageData';
import DateRangeTwoToneIcon from '@material-ui/icons/DateRangeTwoTone';
import DoneAllOutlinedIcon from '@material-ui/icons/DoneAllOutlined';
import MyCountdown from '../../utils/Countdown/Countdown';

import React from 'react';
import { useStyles } from './../../utils/styles';
import Image from 'next/image';
export default function HomePage() {
  const classes = useStyles();
  console.log(styles);
  return (
    <>
      <div className={styles.background}>
        <Grid className={classes.section} container>
          <Box className={classes.section}>
            <Typography component="h1" variant="h2" align="center">
              <strong> ILSC MONTREAL</strong>
            </Typography>{' '}
            <Divider />
            <Typography component="h1" align="center" variant="h3">
              Cambridge CELTA
            </Typography>{' '}
            <Divider />
            <Typography align="center" variant="h5">
              CERTIFICATE IN TEACHING ENGLISH TO SPEAKERS OF OTHER LANGUAGES
            </Typography>
            <Divider />
          </Box>
          <Grid
            alignItems="stretch"
            className={classes.section}
            container
            justifyContent="space-around"
            spacing={10}
          >
            <Grid item xs={12} sm={8} md={4} lg={6}>
              <Paper className={classes.paper} elevation={4}>
                <Typography variant="h4" align="center">
                  Online Courses
                </Typography>
                <List textAlign="center">
                  {courseDates.map((item) => {
                    const { id, year, month, day, duration } = item;
                    return (
                      <ListItem key={id}>
                        <ListItemAvatar>
                          <DateRangeTwoToneIcon />
                        </ListItemAvatar>
                        <Typography variant="h6">
                          {day} {month}, {year} ({duration})
                        </Typography>
                      </ListItem>
                    );
                  })}
                </List>{' '}
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Paper className={classes.paper} elevation={4}>
                <Typography align="center" variant="h4">
                  Next Available Course Starts In
                </Typography>
                <MyCountdown date="2021-10-1" completionText="done" />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div className={styles.background2}>
        <Grid container className={classes.section}>
          <Paper className={classes.paper} elevation={4}>
            <Typography component="h1" variant="h3">
              The gold standard teaching qualification
            </Typography>
            <Typography
              variant="body1"
              paragraph
              align="left"
              className={classes.paragraph}
            >
              CELTA is a qualification for teaching English as a foreign
              language. It focuses on developing practical skills with
              face-to-face and online teaching practice, which will provide you
              with the techniques and confidence you need to begin teaching as
              soon as you finish the course.
              <br />
              <br /> CELTA is the most widely recognised English teaching
              qualification in the world. It’s the qualification most often
              requested by employers: three out of four English language
              teaching jobs require a CELTA qualification. Whether you’re a new
              teacher looking for their first teaching job, or you want to prove
              to employers that you have the teaching skills with a recognised
              certificate, CELTA is the qualification you need.
            </Typography>
          </Paper>
        </Grid>
      </div>
      <div>
        <Grid container className={classes.section}>
          <Grid item xs={12}>
            {' '}
            <Typography
              gutterBottom
              align="center"
              component="h1"
              variant="h3"
              display="block"
            >
              {' '}
              Who Is Celta For?
            </Typography>
          </Grid>
          <Grid container>
            <Grid container item sm={12} md={6} justifyContent="center">
              <List>
                <ListItem>
                  <Typography variant="h6">
                    <ListItemIcon>
                      <DoneAllOutlinedIcon />
                    </ListItemIcon>
                    All who want to be perfect in english
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="h6">
                    <ListItemIcon>
                      <DoneAllOutlinedIcon />
                    </ListItemIcon>
                    All who want to be perfect in english
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="h6" display="block">
                    <ListItemIcon>
                      <DoneAllOutlinedIcon />
                    </ListItemIcon>
                    All who want to be perfect in english
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="h6" display="block">
                    <ListItemIcon>
                      <DoneAllOutlinedIcon />
                    </ListItemIcon>
                    All who want to be perfect in english
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="h6" display="block" color="primary">
                    <ListItemIcon>
                      <DoneAllOutlinedIcon />
                    </ListItemIcon>
                    All who want to be perfect in english
                  </Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid item sm={12} md={6}>
              <Image
                src={CoursesImage}
                alt="picture of a laptop"
                width={400}
                height={400}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
