// dependencies
import Head from 'next/head';
// components
import { CenterPanel } from '../../components';


const RegisterContent = {
    registerTitle: 'This is Where You Will Register !',
    registerDescription: 'we will not have a data leak',
    registerCenterPanel: {
        navLinks: [
          {
            linkText: 'Take Me Back =_=',
            linkDestination: '/signin'
          },
          {
            linkText: 'Take me home, friend',
            linkDestination: '/'
          },
        ]
      }
};

const FolderDashboard = ({
    content
}) => {

    const { registerTitle, registerDescription, registerCenterPanel } = content;

    return (
        <div className='screen-container center'>
            <Head>
                <title>tomou Folder Dashboard</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>{registerTitle}</h1>
            <p>{registerDescription}</p>
            <CenterPanel id='folder-dashboard-nav' content={registerCenterPanel} />
        </div>
    );
}

export default FolderDashboard;


export function getStaticProps() {
    return {
        props: {
            content: RegisterContent,
        }
    }
}