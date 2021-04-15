const Modal = ({
    id,
    onSubmit,
    content: { label='' }
}) => {

    return (
        <div id={id} className='modal-container'>
            <div className='modal-wrapper'>
                <a className='x-close' href='#'>&times;</a>
                <form action={onSubmit}>
                    <label htmlFor='folder-name-input'><h3>{label}</h3></label>
                    <input className='modal-form' type='text' id="folder-name-input" name="enter a folder name" />
                    <input className='modal-submit' type='submit' value='Create Folder' />
                </form>
            </div>
        </div>
    );
}

export default Modal;