import './NavbarMobile.css';

const NavbarMobile = (props) => {

	return (
		<div className="navbar-mobile-wrapper">
	        <div className="navbar">
	          <div className="logo" tabIndex={0}><div tabIndex={-1}><span>CACS.WS</span></div></div>
	          { props.children }
	        </div>

	    </div>
	);
}

export default NavbarMobile;