// dependencies
import { useState } from 'react'; 
// installed components
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const TasksCalendar = ( {
    id,
    content,
} ) => {

    /* HOOKS */
    const [ value, onChange ] = useState( new Date() );

    console.log( value );

    return (
        <section id={id} className='tasks-calendar-container'>
            <div className='screen-container text-center'>
                <h1>Tasks Calendar</h1>
            </div>

            <div className='calendar-wrapper'>
                <Calendar className='calendar' tileClassName='calendar-tile'
                    onChange={onChange}
                    value={value} 
                    navigationAriaLabel='change date selection'
                    nextAriaLabel='next small date range'
                    next2AriaLabel='next large date range'
                    prevAriaLabel='previous small date range'
                    prev2AriaLabel='previous large date range' />
            </div>
        </section>
    );
}

export default TasksCalendar;