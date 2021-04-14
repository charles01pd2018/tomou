// partials
import { LinkBlob } from '../elements';
import { SignInButton } from '../elements';

const CenterPanel = ({
    id,
    content: { navLinks=[], signInButtons=[] }
}) => {

    return (
        <section id={id} className='center-panel-container'>
            <div className='center-panel-wrapper'>
                {
                    signInButtons.map( buttonType => (
                        <SignInButton key={buttonType} buttonType={buttonType} />
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