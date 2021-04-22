// dependencies
import Head from 'next/head';
import { useEffect } from 'react';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
// components
import { CenterPanel } from '../../components';


const SignInContent = {
    title: 'Sign In to tomou, yuhurd',
    description: 'Get ready to have your mind blown with the greatest note taking experience you could ever fathom',
    centerPanelContent: {
        signInButtons: [
            'Github',
        ],
        navLinks: [
            {
                linkText: 'Register Directly with tomou, where your personal data will always be safe :-D',
                linkDestination: '/register'
              },
            {
              linkText: 'Take me home, friend',
              linkDestination: '/'
            },
          ],
    }
};

const SignIn = ({
    content
}) => {

    /* HOOKS */
    const [ session, loading ] = useSession();
    const router = useRouter();

    useEffect( () => {
        if ( session ) router.push('/app');
    }, [ session, loading ] );

    /* CONTENT */
    const { title, description, centerPanelContent } = content;

    return (
        <div className='screen-container center'>
            <Head>
                <title>Sign into tomou, friend</title>
            </Head>

            <h1>{title}</h1>
            <p>{description}</p>
            <CenterPanel id='sign-in-buttons' content={centerPanelContent} />
        </div>
    );
}

export default SignIn;


export function getStaticProps() {
    return {
        props: {
            content: SignInContent,
        }
    }
}