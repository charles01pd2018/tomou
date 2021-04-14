// dependencies
import { getSession } from 'next-auth/client';
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
    content,
    folders
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
            <GridLinks id='mongo-folder-links' content={ { folders } } />
        </div>
    );
}

export default FolderDashboard;


export async function getServerSideProps( context ) {
    const session = await getSession( context );

    // this should return empty props and redirect the user to signin page
    if ( !session || !session.user ) return { props: { content: FolderDashboardContent } }; 

    const { db } = await connectToMongoDb();
    const folders = await folder.getFolders( db, session.user.id );

    const props = { session };
    props.content = FolderDashboardContent;
    props.folders = folders;

    return { props };
}