import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BackgroundImage from './BackGroundImage';
import add_expense from './assets/add_expense.png';
import signup_and_login from './assets/signup_and_login.png';

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: 'center',
  },
}));

const ListOfBackGroundImages = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <BackgroundImage
        title={'SignUp and Login'}
        paragraph={'Create a new account and login'}
        imageUrl={signup_and_login}
        imageAlt={'signup_and_login'}
      />
      <BackgroundImage
        title={'Add Expense'}
        paragraph={'Add a new expense to your dashboard'}
        imageUrl={add_expense}
        imageAlt={'add expense'}
      />
      <BackgroundImage
        title={'See Graph'}
        paragraph={'See your expenses dashboard'}
        imageUrl={add_expense}
        imageAlt={'expenses_graph'}
      />
      <BackgroundImage
        title={'See Graph'}
        paragraph={'See your expenses dashboard'}
        imageUrl={add_expense}
        imageAlt={'expenses_graph'}
      />
    </div>
  );
};

export default ListOfBackGroundImages;
