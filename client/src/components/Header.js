import { faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import logo from './../images/logo.svg';

export default function Header() {
  return (
    <header>
      <div className='top'>
        <div className='wrapper'>
          <div className='events'>
            <Link to='/'>Media & Industry</Link>
            <Link to='/form'>Meeting & Events</Link>
          </div>
          <div className='heart'>
            <FontAwesomeIcon icon={faHeart} className='heart-icon' />
          </div>
        </div>
      </div>
      <nav>
        <div className='wrapper'>
          <Link to='/home'>
            <img src={logo} alt='' className='logo' />
          </Link>
          <ul className='links'>
            <a href='/#'>Destinations</a>
            <a href='/#'>Things to Do</a>
            <a href='/#'>Plan your Trip</a>
            <a href='/#'>Articles</a>
          </ul>
          <div className='search'>
            <input type='text' name='' id='' placeholder='Search' />
            <FontAwesomeIcon icon={faSearch} className='search-icon' />
          </div>
        </div>
      </nav>
    </header>
  );
}
