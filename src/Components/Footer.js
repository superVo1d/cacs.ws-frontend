
function Footer() {
  return (
    <footer className="wrapper">
      <div className="mail">
        <span>Почта: </span>
        <a href="mailto:supervoid18@gmail.com" tabIndex={0}>
          <span tabIndex={-1}>supervoid18@gmail.com</span>
        </a>
      </div>
      <div className="copyright">
      	<div>© 2021 г.</div>
        <div>
  		  	<a className="copyright-company"
                target="_blank" 
  		  	         rel="noopener noreferrer" 
  		  	        href="http://vk.com/newcyberrussia" 
  		  	    tabIndex={0}>
            <span tabIndex={-1}>«русский киберслон»</span>
          </a>
        </div>
  	 	</div>
    </footer>
  );
}

export default Footer;