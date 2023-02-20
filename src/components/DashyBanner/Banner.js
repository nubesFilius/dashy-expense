import './Banner.css';
import LoginButton from '../UI/MaterialUICard/LoginButton';

// Convention is to repeat file name
function Banner() {
  return (
    <div>
      <h2 className="dashy-banner">
        Dashy Expense <LoginButton />
      </h2>
    </div>
  );
}

export default Banner;
