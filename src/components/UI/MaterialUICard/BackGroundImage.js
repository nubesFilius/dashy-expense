import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import add_expense from './add_expense.png';

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

const BackgroundImage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h2 className={classes.title}>Add Expense</h2>
      <p className={classes.paragraph}>Add a new expense for your account</p>
      <img className={classes.image} src={add_expense} alt="add_expense" />
    </div>
  );
};

export default BackgroundImage;
