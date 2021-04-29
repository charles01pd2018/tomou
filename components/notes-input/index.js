// dependencies
import { useState } from 'react';
import classNames from 'classnames';


const NotesInput = ({
    id,
    content
}) => {

    const [ activeNoteIndex, setActiveNoteIndex ] = useState(0);

    return (
        <section id={id} className='note-input-container'>
            <div className='note-toggle'>
                Edit Note
            </div>
            {
                content.noteItems.map( ( { noteLabel, noteText }, index ) => {
                    const noteID = `note-${index}`;
                    const noteItemClasses = classNames('note-text-area-container', activeNoteIndex === index ? 'note-active' : 'hide' );
                    return (
                        <div key={noteText} className={noteItemClasses}>
                            <label htmlFor={noteID}><b>{noteLabel}</b></label>
                            <div className='note-text-area-wrapper'>
                                <textarea id={noteID} className='note-text-area' name={noteID}>
                                    {content.noteText}
                                </textarea>
                            </div>
                        </div>
                    );
                })
            }
        </section>
    );
}

export default NotesInput;