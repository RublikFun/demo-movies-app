function Header() {
  return (
    <nav className='blue lighten-1'>
      <div className='nav-wrapper container'>
        <a href='/' className='brand-logo'>
          React Movies App
        </a>
        <ul id='nav-mobile' className='right hide-on-med-and-down'>
          <li>
            <a href='?'>Some Link</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };

