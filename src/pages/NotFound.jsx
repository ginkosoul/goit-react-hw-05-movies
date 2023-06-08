import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>404</h1>
      <p style={{ textAlign: 'center' }}>
        The page you are looking for does not exist.
      </p>
      <p style={{ textAlign: 'center' }}>
        <Link to="/">Go to Home </Link>
      </p>
    </div>
  );
};

export default NotFound;
