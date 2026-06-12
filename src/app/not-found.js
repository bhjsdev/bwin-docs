import Link from 'next/link';
import './not-found.css';

export default function NotFound() {
  return (
    <div className="not-found">
      <p className="not-found__code">404</p>
      <h1 className="not-found__title">Page not found</h1>
      <p className="not-found__text">
        The page you’re looking for doesn’t exist or may have moved.
      </p>
      <Link className="not-found__home" href="/">
        Go back home
      </Link>
    </div>
  );
}
