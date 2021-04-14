// dependencies
import Head from 'next/head';
// components
import { GridLinks } from '../../components';
// database
import connectToMongoDb from '../../db/connectMongo';
import { folder } from '../../db/resources';

const FolderDashboardContent = {
    title: 'Folder Dashboard',
    description: 'This is where the user will see all the folder they have :-D',
    gridLinksContent: {
        folderNames: [
            'folder 1',
            'folder 2',
            'folder 3',
            'folder 4',
            'folder 5',
            'folder 6'
        ],
    },
};

const FolderDashboard = ({
    content
}) => {

    const { title, description, gridLinksContent } = content;

    return (
        <div className='screen-container center'>
            <Head>
                <title>tomou Folder Dashboard</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>{title}</h1>
            <p>{description}</p>
            <GridLinks id='folder-links' content={gridLinksContent} />
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