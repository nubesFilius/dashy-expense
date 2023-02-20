import React from 'react';
import Button from '@material-ui/core/Button';

function LoginButton() {
  const loginButtonStyle = {
    marginRight: '16px',
  };

  return (
    <Button variant="contained" color="primary" style={loginButtonStyle}>
      Login
    </Button>
  );
}

export default LoginButton;
