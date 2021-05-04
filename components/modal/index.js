// dependencies
import { useState } from 'react';
import { useRouter } from 'next/router';
// elements
import { Button } from '../elements';


const Modal = ({
    id,
    content: { label='', submitText='', buttonContent={} },
    onSubmit,
}) => {

    /* HOOKS */
    const router = useRouter();
    const [ inputName, setInputName ] = useState('');

    const submit = ( event )  => {
        event.preventDefault();
        router.push('/app/storage#'); // this is not working the way i thought it would :-3
        onSubmit( { name: inputName } );
    }

    /* CONTENT */
    const { buttonText } = buttonContent;

    return (
        <>
            <a href={`#${id}`}>
                <Button className='button-lg button-main' content={buttonContent} />
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
                        <button className='modal-submit' type='submit'>{submitText}</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Modal;