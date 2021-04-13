// dependencies
import Head from 'next/head';
// components
import { CenterPanel } from '../../components';


const SignInContent = {
    signInTitle: 'Sign In or Register',
    signInDescription: 'This is where you will sign in, not sure if this is auto done thru next/auth but i want a placeholder for myself to keep track off yuhurd',
    signInCenterPanel: {
        navLinks: [
          {
            linkText: 'Take me home, friend',
            linkDestination: '/'
          },
        ]
      }
};

const SignIn = ({
    content
}) => {

    const { signInTitle, signInDescription, signInCenterPanel } = content;

    return (
        <div className='screen-container center'>
            <Head>
                <title>Sign into tomou, friend</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>{signInTitle}</h1>
            <p>{signInDescription}</p>
            <CenterPanel id='sign-in-nav' content={signInCenterPanel} />
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