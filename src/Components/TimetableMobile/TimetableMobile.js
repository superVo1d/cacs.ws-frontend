import './TimetableMobile.css';

const TimetableMobile = () => {

	return (
		<>
			<div className="week-navigation">
				<div className="btn-container">
					<button className="btn prev" 
	                       tabIndex={0}>
	                	<div tabIndex={-1}><span className="prev-icon"></span></div>
	              	</button>
              	</div>
              	<div className="dates">
					<div className="date day"><div>31</div></div>
					<div className="date day today"><div><div>1</div></div></div>
					<div className="date day"><div>2</div></div>
					<div className="date day"><div>3</div></div>
					<div className="date day"><div>4</div></div>
					<div className="date day"><div>5</div></div>
					<div className="date day"><div>6</div></div>
				</div>
				<div className="btn-container">
					<button className="btn next" 
	                     tabIndex={0}>
	                	<div tabIndex={-1}><span className="next-icon"></span></div>
	              	</button>
              	</div>
			</div>
			<div className="timetable-mobile-wrapper">
				<div className="timetable-scrollable">
					<section>
						<div className="row day">
							<div className="field time"></div>
							<div className="date-info">
								<span>Понедельник,</span>
								<br/>
								<span><b>31 декабря</b></span>
							</div>
						</div>
						<div className="row">
							<div className="field time">9:00</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">10:40</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">10:40</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">12:20</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">14:00</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">15:40</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">17:20</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">19:00</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">20:40</div>
							<div className="date"></div>
						</div>
					</section>
					<section>					
						<div className="row day">
							<div className="field time"></div>
							<div className="date-info">
								<span>Вторник,</span>
								<br/>
								<span><b>1 января</b></span>
							</div>
						</div>
						<div className="row">
							<div className="field time">9:00</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">10:40</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">10:40</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">12:20</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">14:00</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">15:40</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">17:20</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">19:00</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">20:40</div>
							<div className="date"></div>
						</div>		
					</section>
					<section>			
						<div className="row day">
							<div className="field time"></div>
							<div className="date-info">
								<span>Среда,</span>
								<br/>
								<span><b>2 января</b></span>
							</div>
						</div>
						<div className="row">
							<div className="field time">9:00</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">10:40</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">10:40</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">12:20</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">14:00</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">15:40</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">17:20</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">19:00</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">20:40</div>
							<div className="date"></div>
						</div>
					</section>
					<section>							
						<div className="row day">
							<div className="field time"></div>
							<div className="date-info">
								<span>Четверг,</span>
								<br/>
								<span><b>3 января</b></span>
							</div>
						</div>
						<div className="row">
							<div className="field time">9:00</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">10:40</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">10:40</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">12:20</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">14:00</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">15:40</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">17:20</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">19:00</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">20:40</div>
							<div className="date"></div>
						</div>	
					</section>					
					<section>
						<div className="row day">
							<div className="field time"></div>
							<div className="date-info">
								<span>Пятница,</span>
								<br/>
								<span><b>4 января</b></span>
							</div>
						</div>
						<div className="row">
							<div className="field time">9:00</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">10:40</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">10:40</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">12:20</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">14:00</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">15:40</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">17:20</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">19:00</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">20:40</div>
							<div className="date"></div>
						</div>	
					</section>
					<section>						
						<div className="row day">
							<div className="field time"></div>
							<div className="date-info">
								<span>Суббота,</span>
								<br/>
								<span><b>5 января</b></span>
							</div>
						</div>
						<div className="row">
							<div className="field time">9:00</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">10:40</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">10:40</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">12:20</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">14:00</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">15:40</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">17:20</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">19:00</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">20:40</div>
							<div className="date"></div>
						</div>	
					</section>
					<section>							
						<div className="row day">
							<div className="field time"></div>
							<div className="date-info">
								<span>Воскресенье,</span>
								<br/>
								<span><b>6 января</b></span>
							</div>
						</div>
						<div className="row">
							<div className="field time">9:00</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">10:40</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">10:40</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">12:20</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">14:00</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">15:40</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">17:20</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">19:00</div>
							<div className="date"></div>
						</div>
						<div className="row">
							<div className="field time">20:40</div>
							<div className="date"></div>
						</div>			
					</section>					
				</div>
			</div>
		</>
	);
}

export default TimetableMobile;