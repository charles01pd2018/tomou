// elements
import { LinkBlob } from '../elements';
import { SigninButton } from '../elements';


const CenterPanel = ({
    id,
    content: { navLinks=[], SigninButtons=[] }
}) => {

    return (
        <section id={id} className='center-panel-container'>
            <div className='center-panel-wrapper'>
                {
                    SigninButtons.map( buttonType => (
                        <SigninButton key={buttonType} buttonType={buttonType} />
                    ) )
                }
                {
                    navLinks.map( ( { linkText, linkDestination } ) => (
                        <LinkBlob key={linkText} blobClassName='wrap-break' linkText={linkText} linkDestination={linkDestination} />
                    ) )
                }
            </div>
        </section>
    );
}

export default CenterPanel;