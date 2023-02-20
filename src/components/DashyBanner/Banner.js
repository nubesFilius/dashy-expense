import './Banner.css';
import LoginButton from '../UI/MaterialUICard/LoginButton';
import SignUpButton from '../UI/MaterialUICard/SignUpButton';

// Convention is to repeat file name
function Banner() {
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={containerStyle}>
      <div>
        <h2 className="dashy-banner">Dashy Expense</h2>
      </div>
      <div>
        <SignUpButton />
        <LoginButton />
      </div>
    </div>
  );
}

export default Banner;
