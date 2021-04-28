// elements
import { LinkBlob } from '../elements';

const LinkPoof = ({
    id,
    content: { linkItem }
}) => {

    /* CONTENT */
    const { linkText, linkDestination } = linkItem;

    return (
        <section id={id} className='poof-container'>
            <div className='app-poof-wrapper'>
                <LinkBlob linkDestination={linkDestination} linkText={linkText} />
            </div>
        </section>
    );
}

export default LinkPoof;