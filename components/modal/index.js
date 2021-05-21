// dependencies
import { useState, useRef } from 'react';
import classNames from 'classnames';
// elements
import { Button } from '../elements';


const Modal = ({
    id,
    content: { label='', submitText='', buttonContent={} },
    onSubmit,
}) => {

    /* HOOKS */
    const closeModalRef = useRef( null );
    const [ inputName, setInputName ] = useState('');
    const [ modalActive, setModalActive ] = useState( false );

    /* FUNCTIONS */
    const handleFormSubmit = ( event )  => {
        event.preventDefault();
        closeModalRef.current.click(); // close the modal
        onSubmit( { name: inputName } ); // add new folder to database
        setInputName( '' ); // reset the modal input
    }

    const toggleModal = () => {
        setModalActive( modalActive => !modalActive );
    }

    /* CLASSNAMES */
    const modalContainerClasses = classNames( 'modal-container', modalActive && 'modal-active' );

    return (
        <>
            <Button className='button-md button-main' content={buttonContent} onClick={toggleModal} type='button' />
            <div id={id} className={modalContainerClasses}>
                <div className='modal-wrapper'>
                    <button className='x-close' onClick={toggleModal} type='button'>&times;</button>
                    <form onSubmit={handleFormSubmit}>
                        <label htmlFor='folder-name-input'><h3>{label}</h3></label>
                            <input id="folder-name-input" className='modal-form' 
                            type='text' 
                            value={inputName} 
                            onChange={ () => setInputName( event.target.value ) }
                            required />
                        <Button className='button-sm button-main modal-submit' type='submit' content={ { text: submitText } } />
                    </form>
                </div>
                <button ref={closeModalRef} className='modal-backdrop' onClick={toggleModal} type='button' tabIndex='-1' hidden />
            </div>
        </>
    );
}

export default Modal;