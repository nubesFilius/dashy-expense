import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '300px', // Change the height to the desired size of the container
    width: '300px', // Change the width to the desired size of the container
    margin: 'auto', // Center the container horizontally
    padding: theme.spacing(2),
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.25)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.3)',
    },
    backgroundColor: '#f7f7f7', // Add a background color to the container element
  },
  wrapper: {
    display: 'inline-block',
    margin: theme.spacing(2),
    verticalAlign: 'top',
  },
  image: {
    maxHeight: '100%',
    maxWidth: '100%',
    borderRadius: '10px',
  },
  title: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#444',
  },
  paragraph: {
    textAlign: 'center',
    color: '#666',
  },
}));

const BackgroundImage = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.root}>
        <h2 className={classes.title}>{props.title}</h2>
        <p className={classes.paragraph}>{props.paragraph}</p>
        <img
          className={classes.image}
          src={props.imageUrl}
          alt={props.imageAlt}
        />
      </div>
    </div>
  );
};

export default BackgroundImage;
