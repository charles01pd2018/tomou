// dependencies
import { useState, useRef } from 'react';
// elements
import { Button } from '../elements';


const Modal = ({
    id,
    content: { label='', submitText='', buttonContent={} },
    onSubmit,
}) => {

    /* HOOKS */
    const [ inputName, setInputName ] = useState('');
    const closeModalRef = useRef( null );

    const submit = ( event )  => {
        event.preventDefault();
        closeModalRef.current.click(); // close the modal
        onSubmit( { name: inputName } ); // add new folder to database
        setInputName( '' ); // reset the modal input
    }

    return (
        <>
            <a href={`#${id}`}>
                <Button className='button-md button-main' content={buttonContent} />
            </a>
            <div id={id} className='modal-container'>
                <div className='modal-wrapper'>
                    <a className='x-close' href='#'>&times;</a>
                    <form onSubmit={submit}>
                        <label htmlFor='folder-name-input'><h3>{label}</h3></label>
                            <input id="folder-name-input" className='modal-form' 
                            type='text' 
                            value={inputName} 
                            onChange={ () => setInputName( event.target.value ) }
                            required />
                        <Button className='button-sm button-main modal-submit' type='submit' content={ { text: submitText } } />
                    </form>
                </div>
                <a className='modal-backdrop' href='#' ref={closeModalRef} tabIndex='-1' hidden />
            </div>
        </>
    );
}

export default Modal;