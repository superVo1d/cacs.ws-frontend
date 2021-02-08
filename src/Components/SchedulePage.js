import { useState, useLayoutEffect } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'

import Timetable from './Timetable';
import Footer from './Footer';
import Navbar from './Navbar';
import NightmodeButton from './NightmodeButton';
import DownloadButton from './DownloadButton';
import Searchbar from './Searchbar';

import TimetableMobile from './TimetableMobile/TimetableMobile';
import NavbarMobile from './NavbarMobile/NavbarMobile';
import SearchButton from './SearchButton/SearchButton';

const SchedulePage = (props) => {

	const { id } = props.match.params;

	const [userExists, setUserExists] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);
	const [name, setName] = useState();

	const isTabletOrMobile = useMediaQuery({
	    query: '(max-width: 600px)'
    })

	useLayoutEffect(() => {

		const apiPrefix = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? '' : 'api/';

		fetch(apiPrefix + 'user_exists', {
	        method: 'POST',
	        headers: {
	          'Content-Type': 'application/json'
	        },
	        body: JSON.stringify({
	            "cacs_id": id.slice(1),
	             "status": id[0]
	        })
	    })
	    .then(res => {
	    	return res.json();
	    })
	    .then((res) => {
	    	setUserExists(true);
	    	setIsLoaded(true);

			setName(res.last_name + ' ' + res.name + ' ' + res.patronymic);

			document.title = 'Расписание / ' + res.last_name + ' ' + res.name;

	        console.log('success');
		}, (error) => {
			setUserExists(false);
			setIsLoaded(true);
			console.log('error');
		});

	}, [id]);


	return (
		false ? 
			<div className="mobile-wrapper">
				<NavbarMobile>
					<div className="btn-container">
						<SearchButton name={name}/>
			        </div>
				</NavbarMobile>
				<TimetableMobile />
			</div>
		:
			<>
				<Navbar>
					<Searchbar name={name} />
			    	<div className="btn-container">
			      		<NightmodeButton 
			          		toggleTheme={ props.toggleTheme }
			          		  isChecked={ props.isChecked }
			        	/>
			        </div>
		        </Navbar>
	        	{ !isLoaded ? (
						<div className="wrapper error-page">
							<div className="main-container">
								<div className="loader"></div>
							</div>	        		
							<div className="footer-container"> 
								<Footer />
							</div>
						</div>
					) : userExists ? (
						<main>
				 			<Timetable />
							<Footer />
						</main>
					) : (
						<Redirect to={`${process.env.PUBLIC_URL}/error`} />
					)
				}
			</>
	)
}

export default withRouter(SchedulePage);