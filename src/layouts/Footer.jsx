function Footer() {
  return (
    <footer className='page-footer app-footer blue-grey darken-3'>
      <div className='container'>
        Demo React Movies App © {new Date().getFullYear()}
        <a className='grey-text text-lighten-4 right' href='?'>
          Some Link
        </a>
      </div>
    </footer>
  );
}

export { Footer };

