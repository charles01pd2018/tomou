// partials
import { LinkBlob } from '../elements';

const CenterPanel = ({
    id,
    content: { navLinks }
}) => {

    return (
        <section id={id} className='center-panel-container'>
            <div className='center-panel-wrapper'>
                {
                    navLinks.map( ( { linkText, linkDestination } ) => (
                        <LinkBlob key={linkText} linkText={linkText} linkDestination={linkDestination} />
                    ))
                }
            </div>
        </section>
    );
}

export default CenterPanel;