function Header() {
  return (
    <nav className='blue lighten-1'>
      <div className='nav-wrapper container'>
        <a href='%PUBLIC_URL%' className='brand-logo'>
          React Movies App
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a href='http://www.omdbapi.com/'>OMDb API</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };

