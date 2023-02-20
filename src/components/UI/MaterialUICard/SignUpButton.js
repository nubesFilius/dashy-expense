import React from 'react';
import Button from '@material-ui/core/Button';

function SignUpButton() {
  const buttonStyle = {
    marginLeft: '32px',
    marginRight: '8px',
  };

  const signupButtonStyle = {
    marginRight: '16px',
  };

  return (
    <Button
      variant="outlined"
      color="secondary"
      style={{ ...buttonStyle, ...signupButtonStyle }}
    >
      SignUp
    </Button>
  );
}

export default SignUpButton;
