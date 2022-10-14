const Header = () => (
  <header className="masthead mb-auto">
    <div className="inner">
      <h3 className="masthead-brand">VotingDapp</h3>
      <nav className="nav nav-masthead justify-content-center">
        <a className="nav-link active" href="/">
          Home
        </a>
        <a className="nav-link" href="/voting">
          Voting
        </a>
        <a className="nav-link" href="/utilities">
          Utilities
        </a>
      </nav>
    </div>
  </header>
);

export default Header;
