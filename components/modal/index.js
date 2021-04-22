// dependencies
import { useState } from 'react';
import { useRouter } from 'next/router';


const Modal = ({
    id,
    onSubmit,
    content: { label='' }
}) => {

    const router = useRouter();
    const [ folderName, setFolderName ] = useState('');

    const submit = ( event )  => {
        event.preventDefault();
        router.push('/app/storage#'); // this is not working the way i thought it would :-3
        onSubmit( { folderName } );
    }

    return (
        <div id={id} className='modal-container'>
            <div className='modal-wrapper'>
                <a className='x-close' href='#'>&times;</a>
                <form onSubmit={submit}>
                    <label htmlFor='folder-name-input'><h3>{label}</h3></label>
                        <input className='modal-form' 
                        type='text' id="folder-name-input" 
                        value={folderName} 
                        onChange={ () => setFolderName( event.target.value ) }
                        required />
                    <button className='modal-submit' type='submit'>Create Folder</button>
                </form>
            </div>
        </div>
    );
}

export default Modal;