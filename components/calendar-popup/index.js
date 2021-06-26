
// dependencies
import { useState } from 'react'; 
// installed components
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const CalendarPopup = ( {
    id,
    content,
} ) => {

    /* HOOKS */
    const [ dateSelection, setDateSelection ] = useState( new Date() );

    /* FUNCTIONS */
    const handleDayClick = () => {
        // this should prompt the user for a time and store it in state
        console.log( dateSelection );
    }

    return (
        <section id={id} className='tasks-calendar-container'>
            <div className='screen-container text-center'>
                <h1>Tasks Calendar</h1>
            </div>

            <div className='calendar-wrapper'>
                <Calendar className='calendar' tileClassName='calendar-tile'
                    value={dateSelection}
                    onChange={setDateSelection}
                    onClickDay={handleDayClick}
                    navigationAriaLabel='change date selection'
                    nextAriaLabel='next small date range'
                    next2AriaLabel='next large date range'
                    prevAriaLabel='previous small date range'
                    prev2AriaLabel='previous large date range' />
            </div>
        </section>
    );
}


export default CalendarPopup;