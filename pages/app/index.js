// dependencies
import Head from 'next/head';
// components
import { CenterPanel } from '../../components';


const FolderDashboardContent = {
    title: 'Folder Dashboard',
    description: 'This is where the user will see all the folder they have :-D',
    centerPanelContent: {
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

    const { title, description, centerPanelContent } = content;

    return (
        <div className='screen-container center'>
            <Head>
                <title>tomou Folder Dashboard</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>{title}</h1>
            <p>{description}</p>
            <CenterPanel id='folder-dashboard-nav' content={centerPanelContent} />
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