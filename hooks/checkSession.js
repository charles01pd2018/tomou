// dependencies
import { useSession } from 'next-auth/client';
// components
import { CenterPanel } from '../components';

const checkSessionContent = {
    centerPanelContent: {
        navLinks: [
            {
                linkText: 'SignIn',
                linkDestination: '/signin'
            },
        ],
    },
}

const checkSession = () => {
    const [ session, loading ] = useSession();

    if ( loading ) return null; 

    if ( !session ) {
        return (
            <div className='screen-container center'>
                <h1>You are not logged in</h1>
                <CenterPanel id='sign-in-redirect' 
                content={checkSessionContent.centerPanelContent} />
            </div>
        )
    }
}

export {
    checkSession,
}