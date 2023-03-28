const NavBar = ({ username }) => {
  return (
    <div className="header">
      <h1>TAKE STOCK</h1>
      <h4>A Stock Control Application</h4>
      <div className="username" title={username}>
        <p>{username[0]}</p>
      </div>
    </div>
  );
};

export default NavBar;
