// components
import CenterPanel from '../center-panel';

const NotAuthContent = {
    centerPanelContent: {
        navLinks: [
            {
                linkText: 'Signin!',
                linkDestination: '/signin'
            },
        ],
    },
};

const NotAuth = ({
    id
}) => {

    return (
        <section id={id} className='screen-container text-center'>
            <h1>You are not logged in</h1>
            <CenterPanel id='sign-in-redirect' 
            content={NotAuthContent.centerPanelContent} />
        </section>
    )
}

export default NotAuth;