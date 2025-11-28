import brandLogo from "../assets/brand_logo.png";

const Navigation = () => {
  return (
    <div>
      <nav className="container">
        <div className="logo">
          <img src={brandLogo} alt="logo" />
        </div>

        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>

        <button>Login</button>
      </nav>
    </div>
  );
};

export default Navigation;
