import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="page not-found">
      <h1>404 - Page Not Found</h1>
      <p>The URL you requested is invalid.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}
