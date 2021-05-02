// dependencies
import Head from 'next/head';
// components
import { CenterPanel } from '../../components';


const FolderDashboard = ({
    content
}) => {

    const { title, description, centerPanelContent } = content;

    return (
        <>
            <Head>
                <title>Register for tomou</title>
            </Head>
            <div className='screen-container text-center'>
                <h1>{title}</h1>
                <p>{description}</p>
                <CenterPanel id='folder-dashboard-nav' content={centerPanelContent} />
            </div>
        </>
    );
}

export default FolderDashboard;


const RegisterContent = {
    title: 'This is Where You Will Register !',
    description: 'we will not have a data leak',
    centerPanelContent: {
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

export function getStaticProps() {
    return {
        props: {
            content: RegisterContent,
        }
    }
}