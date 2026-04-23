//Nav bar for navigation links  
import { Link, NavLink } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <BookOpen className="logo-icon" />
          <span>Online Library</span>
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink to="/" className={({isActive}) => 'nav-links' + (isActive ? ' active' : '')} end>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/books" className={({isActive}) => 'nav-links' + (isActive ? ' active' : '')}>
              Browse Books
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/add-book" className={({isActive}) => 'nav-links' + (isActive ? ' active' : '')}>
              Add Book
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
