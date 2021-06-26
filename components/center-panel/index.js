// elements
import { LinkBlob } from '../elements';
import { SigninButton } from '../elements';
import { nanoid } from 'nanoid';


const CenterPanel = ({
    id,
    content: { navLinks=[], signinButtons=[] }
}) => {

    return (
        <section id={id} className='center-panel-container'>
            <div className='center-panel-wrapper'>
                {
                    signinButtons.map( buttonType => (
                        <SigninButton key={buttonType} buttonType={buttonType} />
                    ) )
                }
                {
                    navLinks.map( ( { linkText, linkDestination } ) => (
                        <div key={nanoid()} className='flex-center'>
                            <LinkBlob key={linkText} linkText={linkText} linkDestination={linkDestination} />
                        </div>
                    ) )
                }
            </div>
        </section>
    );
}

export default CenterPanel;