// dependencies
import { useState } from 'react';


const Modal = ({
    id,
    onSubmit,
    content: { label='' }
}) => {

    const [ folderName, setFolderName ] = useState('');

    const submit = async ( event )  => {
        event.preventDefault();
        await onSubmit( { folderName } );
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