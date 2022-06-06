function Footer() {
  return (
    <footer className='page-footer app-footer blue-grey darken-3'>
      <div className='container'>
        Demo React Movies App © {new Date().getFullYear()}
        <span className='grey-text text-lighten-4 right'>
          Have Fun with React
        </span>
      </div>
    </footer>
  );
}

export { Footer };

