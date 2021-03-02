import React, { useState, useEffect, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import './TimetableMobile.css';
import FormatTeacher from './../FormatTeacher';

let seedrandom = require('seedrandom');

const TimetableMobile = (props) => {

	const [week, setWeek] = useState(getWeekNumber(new Date()));
	const [isLoaded, setIsLoaded] = useState(false);
	const [activeDay, setActiveDay] = useState(null);

	const daysRef = useRef([]);

    const location = useLocation();
    const {id} = useParams();

	const timeStamps = ['9:00', '10:40', '12:20', '14:00', '15:40', '17:20', '18:55', '20:30'];
	const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

	const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

	useEffect(() => {
		if (props.schedule) {
			daysRef.current = daysRef.current.slice(0, props.schedule.length);
		}

    }, [props.schedule]);

    useEffect(() => {
		if (daysRef.current[0]) {
			daysRef.current[0].scrollIntoView();
		}

    	if (week === getWeekNumber(new Date())) {
			handleClickDay(new Date().getDate())
		}
	}, [daysRef.current]);    	

	useEffect(() => {

		setIsLoaded(false);

	    const apiPrefix = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ? '' : 'api/';

	    fetch(apiPrefix + 'schedules', {
	        method: 'POST',
	        headers: {
	          'Content-Type': 'application/json'
	        },
	        body: JSON.stringify({
	            "cacs_id": id.slice(1),
	            "status": id[0],
	            "week": week
	        })
	      })
	    .then(res => res.json())
	    .then((res) => {
	        props.setSchedule(res.schedule);
	        setIsLoaded(true);
	      },
	      (error) => {
	        console.log(error);
	      }
	    );
	  }, [week, location, id]);

	 const formatType = (type) => {

	 	let title = type;

	    if (type.toLowerCase() === 'лаб.работа') {
	    	title = 'Лабораторная работа'
	    	type = 'Лаб. работа'
	    }

	    return <span title={ title }>{ type }</span>;
	  }

	  const formatPlace = (place) => {
	    //let exp = /zoom/g;

	    // if (exp.test(place.toLowerCase())) {
	    //   return 'Zoom';
	    // } else {
	    //   return place;
	    // }

	    return <span title={ place }><b>{ place }</b></span>;
	  }

	function getWeekNumber(d) {
		// Copy date so don't modify original
		d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
		// Set to nearest Thursday: current date + 4 - current day number
		// Make Sunday's day number 7
		d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
		// Get first day of year
		var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
		// Calculate full weeks to nearest Thursday
		var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
		// Return array of year and week number
		return weekNo;
	}

	function getWeek() {
	    let date = new Date();

	    let shiftedWeekDate;

	    if (halfYear() === 2) {
	      //Второй семестр
	      shiftedWeekDate = date.getDate() + 7 * (week - getWeekNumber(new Date()));
	    } else {
	      //Первый семестр
	      if (((getWeekNumber(new Date()) > 26) && (week > 26)) || ((getWeekNumber(new Date()) < 26) && (week < 26))) {
	        //Если week в этом же году
	        shiftedWeekDate = date.getDate() + 7 * (week - getWeekNumber(new Date()));
	      } else { 
	        //Если недели в разных годах
	        //getWeekNumber(new Date()) > 26
	        if (getWeekNumber(new Date()) > 26) {
	          //week в следующем году.
	          shiftedWeekDate = date.getDate() + 7 * ( 53 - week + getWeekNumber(new Date()));
	        } else {
	          //week в прошлом году.
	          shiftedWeekDate = date.getDate() + 7 * ( week - 53 - getWeekNumber(new Date()));
	        }
	      }
	    }

	    date.setDate(shiftedWeekDate);

	    let days = [];

	    for (let i = 1; i <= 7; i++) {

	      let dayOfWeek;

	      if (date.getDay() === 0) {
	        dayOfWeek = 7;
	      } else {
	        dayOfWeek = date.getDay();
	      }
	      
	      let first = date.getDate() - dayOfWeek + i;
	      let day = new Date(date.setDate(first));
	      days.push(day);
	    }

	    return days;
	}

	const halfYear = () => {
		let date = new Date();

		let month = date.getMonth();

		if (0 < month && month < 8) {
		  return 2;
		} else {
		  return 1;
		}
	}

	function getFirstMonday (date) {
		let d = date;

		while (d.getDay() !== 1) {
		    d.setDate(d.getDate() + 1);
		}

		return d;
	}

	function getBoundsForWeeks() {
	    let date = new Date();

	    let month = date.getMonth();
	    let lowerBound;
	    let upperBound;

	    if (halfYear() === 2) {
			//Второе полугодие
			lowerBound = getFirstMonday(new Date(date.getFullYear(), 1, 1, 0, 0, 0, 0));
			upperBound = new Date(date.getFullYear(), 7, 0, 0, 0, 0, 0);
		} else {
			//Первое полугодие
			if (date.getMonth !== 0) {
			//Сейчас не январь
			lowerBound = new Date(date.getFullYear() - 1, 7, 1, 0, 0, 0, 0);
			upperBound = new Date(date.getFullYear(), 1, 0, 0, 0, 0, 0);
			} else {
			//Сейчас январь
			lowerBound = new Date(date.getFullYear() - 1, 7, 1, 0, 0, 0, 0);
			upperBound = new Date(date.getFullYear(), 1, 0, 0, 0, 0, 0);
			}
		}

		lowerBound = getWeekNumber(lowerBound);
		upperBound = getWeekNumber(upperBound);

		return [lowerBound, upperBound];
	}

	const lowerBound = getBoundsForWeeks()[0];
    const upperBound = getBoundsForWeeks()[1];

	const formatTeacher = (teachers) => {
		return <FormatTeacher teachers={ teachers }/>
	}

	const handleClickPrevWeek = (prev) => {
		setWeek(prev => {
		  if (prev === 1) {
		    return 53;
		  } else {
		    return ((prev - 1) % 53 + 53) % 53;
		  }
		});
	}

	const handleClickNextWeek = (next) => {
		setWeek(prev => {
		  if (prev === 53) {
		    return 1;
		  } else {
		    return ((prev + 1) % 53 + 53) % 53;
		  }
		});
	}

	const daysOfWeek = getWeek();

	String.prototype.capitalize = function() {
	    return this.charAt(0).toUpperCase() + this.slice(1);
	}

	const groupBy = (xs, key) => {
	  if (xs) {
	  	return xs.reduce(function(rv, x) {
		    (rv[x[key]] = rv[x[key]] || []).push(x);
		    return rv;
		  }, {});
	  } else {
	  	return [];
	  }
	};

	const handleClickDay = (date) => {

		const index = Object.keys(groupedByDay).indexOf(date.toString());

		if (daysRef.current[index] && Object.keys(groupedByDay).includes(date.toString())) {
			daysRef.current[index].scrollIntoView();
			//setActiveDay(day);
		}

		//document.querySelector('.timetable-scrollable').scrollIntoView(0, daysRef.current[day].offsetTop);
	}

	function compareByTime( a, b ) {
	  if ( a.hours < b.hours ){
	    return -1;
	  }
	  if ( a.hours > b.hours ){
	    return 1;
	  }
	  return 0;
	}

	const groupedByDay = groupBy(props.schedule, 'day');

	Object.keys(groupedByDay).map(index => groupedByDay[index].sort(compareByTime));

	function renderEvents(events, isToday) {

		return events.map((event, i) => {

			seedrandom(event.name, { global: true });

			return (
				<div className="row" key={i}>
					<div className={isToday ? "field time today" : "field time" }>{ event.hours }:{ (event.minutes === 0) ? '00' : event.minutes }</div>
					<div className={ isToday ? "date today" : "date" }>
		              <div className="event">
		                <div>
		                  <b>{ event.name }</b>
		                </div>
		                {(event.teacher[0]) ? 
		                  <div className="teacher">{ formatTeacher(event.teacher) }</div> 
		                  : null
		                }		
		                <div className="label" style={{backgroundColor: 'var(--color-' + ((Math.trunc(Math.random() * 70)) % 12) + ')'}}>
					      <div>
				      		{ formatType(event.type) } — { formatPlace(event.place) }
					      </div>
						</div>
					  </div>
					</div>
				</div>);			
		});
	}

	return (
		<>
			<div className="week-navigation">
				<div className="btn-container">
				{ (((halfYear() === 1) && ((week > lowerBound) || (week <= upperBound))) || ((halfYear() === 2) && (week > lowerBound))) &&
                	(<button className="btn prev" 
	                         tabIndex={0}
	                          onClick={ () => handleClickPrevWeek() }>
	                	<div tabIndex={-1}><span className="prev-icon"></span></div>
	              	</button>)
	            }
              	</div>
              	<div className="dates">
              		{ daysOfWeek.map((day, i) => {
          				const t = new Date();

          				const isToday = ((day.getDate() === t.getDate()) && (day.getMonth() === t.getMonth()) && (day.getFullYear() === t.getFullYear()))
          				const isActive = day.getDay() === activeDay;
          				const isClickable = Object.keys(groupedByDay).includes(day.getDate().toString());

          				return (
          					<div className={ "date day" + (isToday ? " today" : "") + (isActive ? " active" : "") + (!isClickable ? " clickable" : "") } 
          					       onClick={ () => handleClickDay(day.getDate()) }
          					           key={i}>
          						<div>
          							<div><b>{ day.getDate() }</b></div>
      							</div>
  							</div>)
          			})}
				</div>
				{ (((halfYear() === 1) && ((week < upperBound) || (week >= lowerBound))) || ((halfYear() === 2) && (week < upperBound))) &&
	              (<div className="btn-container">
						<button className="btn next" 
		                         tabIndex={0}
		                          onClick={ () => handleClickNextWeek() }>
		                	<div tabIndex={-1}><span className="next-icon"></span></div>
		              	</button>
	              	</div>)
                }
			</div>
			<div className="timetable-mobile-wrapper">
				<div className="timetable-scrollable">
					{ isLoaded ? (
						(Object.keys(groupedByDay).length > 0) ?
							Object.keys(groupedByDay).map((day, i) => {

								let firstEvent = groupedByDay[day][0];
								let d = new Date(firstEvent.year, firstEvent.month, firstEvent.day, 0, 0, 0, 0, 0);

								const t = new Date();
								const isToday = ((d.getDate() === t.getDate()) && (d.getMonth() === t.getMonth()) && (d.getFullYear() === t.getFullYear()))

								return (
									<section ref={el => daysRef.current[i] = el}
											 key={i}>
										<div className={ isToday ? "row day today" : "row day" }>
											<div className="field time"></div>
											<div className="date-info">
												<span>{ days[d.getDay()] }</span>								
												<br/>
												<span><b>{ firstEvent.day + ' ' + months[firstEvent.month] }</b></span>
											</div>
										</div>
										{ renderEvents(groupedByDay[day], isToday) }
									</section>
								)
							})
							:
							<div className="no-schedule">На этой неделе в расписании нет пар</div>
						)
						: <div className="loader"></div>
					}				
				</div>
			</div>
		</>
	);
}

export default TimetableMobile;