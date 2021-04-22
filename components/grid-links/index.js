// dependencies
import { useState } from 'react';
// elements
import { LinkBlob } from '../elements';


const GridLinks = ({
    id,
    content: { folderNames=[] }
}) => {
    
    /* HOOKS */
    const [ saving, setSaving ] = useState( false );

    const linkDestination = '/';

    return (
        <section id={id} className='grid-links-container'>
            {
                folderNames.map( ( { name }, index ) => (
                    <LinkBlob key={`${name}-${index}`} 
                    linkText={name} 
                    linkDestination={linkDestination} />
                    ) )
            }
        </section>
    );
}

export default GridLinks;