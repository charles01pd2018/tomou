// dependencies
import Head from 'next/head';

// components
import { CenterPanel } from '../../components';

const FolderDashboardContent = {
    folderDashboardTitle: 'Sign In or Register',
    folderDashboardDescription: 'This is where you will sign in, not sure if this is auto done thru next/auth but i want a placeholder for myself to keep track off yuhurd',
    folderDashboardCenterPanel: {
        navLinks: [
          {
            linkText: 'Show me an example notes dashboard, friend',
            linkDestination: '/app/example-note'
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

    const { folderDashboardTitle, folderDashboardDescription, folderDashboardCenterPanel } = content;

    return (
        <div className='screen-container center'>
            <Head>
                <title>tomou Folder Dashboard</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>{folderDashboardTitle}</h1>
            <p>{folderDashboardDescription}</p>
            <CenterPanel id='folder-dashboard-nav' content={folderDashboardCenterPanel} />
        </div>
    );
}

export default FolderDashboard;


export function getStaticProps() {
    return {
        props: {
            content: FolderDashboardContent
        }
    }
}