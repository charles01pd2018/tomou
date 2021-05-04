// dependencies
import Head from 'next/head';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
// components
import { CenterPanel } from '../../components';


const SignIn = ({
    content
}) => {

    /* HOOKS */
    const [ session, loading ] = useSession();
    if ( loading ) return null;

    const router = useRouter();
    if ( session ) router.push('/app');


    /* CONTENT */
    const { title, description, centerPanelContent } = content;

    return (
        <>
            <Head>
                <title>Sign into tomou, friend</title>
            </Head>
            {
                !session && ( 
                    <div className='screen-container text-center'>
                        <h1>{title}</h1>
                        <p>{description}</p>
                        <CenterPanel id='sign-in-buttons' content={centerPanelContent} />
                    </div> )
            }
        </>
    );
}

export default SignIn;


const SignInContent = {
    title: 'Sign In to tomou, yuhurd',
    description: 'Get ready to have your mind blown with the greatest note taking experience you could ever fathom',
    centerPanelContent: {
        signinButtons: [
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

export function getStaticProps() {
    return {
        props: {
            content: SignInContent,
        }
    }
}