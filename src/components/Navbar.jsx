// eslint-disable-next-line react/prop-types
const Navbar = ({ title }) => {
  
  return (
    <div >
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow">
        <div className="container ">
          <a className="navbar-brand fs-2 ps-4" href="/">
            {title}
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
