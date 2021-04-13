// dependencies
import Head from 'next/head';
import { useEffect } from 'react';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
// components
import { CenterPanel } from '../../components';


const SignInContent = {
    signInTitle: 'Sign In to tomou, yuhurd',
    signInDescription: 'Get ready to have your mind blown with the greatest note taking experience you could ever fathom',
    signInCenterPanel: {
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
        if ( session ) router.push('/app/example-notes');
    }, [ session, loading ] );

    /* CONTENT */
    const { signInTitle, signInDescription, signInCenterPanel } = content;

    return (
        <div className='screen-container center'>
            <Head>
                <title>Sign into tomou, friend</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>{signInTitle}</h1>
            <p>{signInDescription}</p>
            <CenterPanel id='sign-in-buttons' content={signInCenterPanel} />
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