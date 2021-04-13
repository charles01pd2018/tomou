// dependencies
import Head from 'next/head';
// components
import { CenterPanel } from '../../components';


const FolderDashboardContent = {
    folderDashboardTitle: 'Folder Dashboard',
    folderDashboardDescription: 'This is where the user will see all the folder they have :-D',
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
            content: FolderDashboardContent,
        }
    }
}