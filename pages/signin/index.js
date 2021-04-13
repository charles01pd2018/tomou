// dependencies
import Head from 'next/head';
import { useEffect } from 'react';
import { signIn, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';

const SignIn = ({
    content
}) => {

    const [ session, loading ] = useSession();
    const router = useRouter();

    useEffect( () => {
        if ( session ) router.push('/app/example-notes');

    }, [ session, loading ] );

    return (
        <div className='screen-container center'>
            <Head>
                <title>Sign into tomou, friend</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>NextJS Sign In</h1>
            <button onClick={ () => { signIn('github') } }>
                Sign In with Github
            </button>
        </div>
    );
}

export default SignIn;


export function getStaticProps() {
    return {
        props: {
            content: {},
        }
    }
}