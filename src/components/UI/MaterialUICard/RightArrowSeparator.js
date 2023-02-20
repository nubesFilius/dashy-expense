import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    padding: theme.spacing(6),
  },
  arrowIcon: {
    color: '#ffffff',
    backgroundColor: '#87CEFA',
    borderRadius: '50%',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));

function RightArrowSeparator() {
  const classes = useStyles();
  return (
    <Grid item xs={12} md={1}>
      <ArrowForwardIosIcon className={classes.arrowIcon} fontSize="large" />
    </Grid>
  );
}

export default RightArrowSeparator;
