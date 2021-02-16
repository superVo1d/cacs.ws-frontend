import Footer from './Footer';
import Navbar from './Navbar';
import Searchbar from './Searchbar';
import NightmodeButton from './NightmodeButton';
import NavbarMobile from './NavbarMobile/NavbarMobile';

import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const PageNotFound = (props) => {

	const history = useHistory();

	const isTabletOrMobile = useMediaQuery({
	    query: '(max-width: 916px)'
    })

	const handleOnClick = () => {
    	history.push(`${process.env.PUBLIC_URL}/`);
  	}

	return (
		<>
			{
				isTabletOrMobile ? (
					<div className="mobile-wrapper">
						<NavbarMobile>
							<div className="btn-container">
					        </div>
							<div className="searchbar-container">
								<Searchbar autoFocus={ true }/>
					        </div>			        
							<div className="btn-container">
								<NightmodeButton 
					          		toggleTheme={ props.toggleTheme }
					          		  isChecked={ props.isChecked }
					        	/>
					        </div>
						</NavbarMobile>
						<div className="wrapper error-page error-page-mobile">
							<div className="main-container">
								<div className="wrapper">
									<h1 className="error">
										404
									</h1>
								</div>
								<div className="error-description wrapper">
									<p>Такой страницы не существует</p>
									<div className="modal-btn-container">
										<button 
											className="modal-btn" 
											  onClick={ () => handleOnClick() }
											 tabIndex={0}>
										    <div tabIndex={-1}>
												<span>На главную</span>
												<span className="modal-btn-icon"></span>
											</div>
										</button>
									</div>
								</div>
								<div className="footer-container"> 
									<Footer />
								</div>
							</div>
						</div>
					</div>
				)
				:
				(<>
					<Navbar>
				      	<Searchbar autoFocus={ true } />
				    	<div className="btn-container">
							<NightmodeButton 
				          		toggleTheme={ props.toggleTheme }
				          		  isChecked={ props.isChecked }
				        	/>
				        </div>
				    </Navbar>
				    <div className="wrapper error-page">
						<div className="main-container">
							<div className="wrapper">
								<h1 className="error">
									404
								</h1>
							</div>
							<div className="error-description wrapper">
								<p>Такой страницы не существует</p>
								<div className="modal-btn-container">
									<button 
										className="modal-btn" 
										  onClick={ () => handleOnClick() }
										 tabIndex={0}>
									    <div tabIndex={-1}>
											<span>На главную</span>
											<span className="modal-btn-icon"></span>
										</div>
									</button>
								</div>
							</div>
							<div className="footer-container"> 
								<Footer />
							</div>
						</div>
					</div>
				</>)
			}
		</>
	)
}

export default PageNotFound;