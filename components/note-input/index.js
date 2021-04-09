const NoteInput = ({
    id,
    content
}) => {

    const noteContent = {
        noteLabel: 'Notes Jawnz',
        noteText: 'It be like that'
    };

    return (
        <section id={id} className='note-input-container'>
            <div className='note-toggle'>
                Edit Note
            </div>

            <label for="note"><b>{noteContent.noteLabel}</b></label>
            <div className='note-text-area-wrapper'>
                <textarea id='note' className='note-text-area' name="note">
                    {noteContent.noteText}
                </textarea>
            </div>
        </section>
    );
}

export default NoteInput;