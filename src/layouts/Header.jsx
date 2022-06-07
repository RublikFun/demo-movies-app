function Header() {
  return (
    <nav className='blue lighten-1'>
      <div className='nav-wrapper container'>
        <a href='./' className='brand-logo'>
          React Movies App
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a href='https://github.com/RublikFun/demo-movies-app' target='_blank' rel='noreferrer'>
              REPO
            </a>
          </li>
          <li>
            <a href='http://www.omdbapi.com/' target='_blank' rel='noreferrer'>
              OMDb API
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };

