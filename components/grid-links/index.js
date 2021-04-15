// elements
import { LinkBlob } from '../elements';

const GridLinks = ({
    id,
    content: { folderNames=[] }
}) => {

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