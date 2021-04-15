// dependencies
import { useState } from 'react';
import { getSession, useSession } from 'next-auth/client';
import Head from 'next/head';
// components
import { GridLinks } from '../../components';
import { Modal } from '../../components';
// layout
import { FoldersLayout } from '../../layout';
// database
import connectToMongoDb from '../../db/connectMongo';
import { folder } from '../../db/resources';

const FolderDashboardContent = {
    title: 'Folder Dashboard',
    description: 'This is where the user will see all the folder they have :-D',
    gridLinksContent: {
        folderNames: [
            {
                name: 'folder 1 ',
            },
            {
                name: 'folder 2 ',
            },
            {
                name: 'folder 3 ',
            },
        ],
    },
};

const FolderDashboard = ({
    content,
    folders
}) => {
    
    /* CHECK SESSION */ 
    const [ session, loading ] = useSession();

    if ( loading ) return null; // loading spinner? 

    if ( !session && !loading ) {
        return (
            <div className='screen-container center'>
                <h1>Big Sad</h1>
            </div>
        )
    }

    /* DATA STOOFS */
    const [ shownFolders, setShownFolders ] = useState( folders || [] );
    console.log( shownFolders );

    const handleNewFolder = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/folder`, {
            method: 'POST',
            body: JSON.stringify( { name: 'a folder' } ),
            headers: {
                'Content-Type': 'application/json'
            },
        } );

        const { data } = await res.json;
        setShownFolders( state => [ ...state, data ] );
    }
    
    /* CONTENT */
    const { title, description, gridLinksContent } = content;
    console.log( gridLinksContent );


    return (
        <FoldersLayout user={session.user}>
            <div className='screen-container center'>
                <Head>
                    <title>tomou Folder Dashboard</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <h1>{title}</h1>
                <p>{description}</p>
                <button>
                    <a href='#add-folder'>Add Folder</a>
                </button>
                <Modal id='add-folder' onSubmit={handleNewFolder} content={ { label: 'Folder Name' } } />
                <GridLinks id='folder-links' content={gridLinksContent} />
                <GridLinks id='mongo-folder-links' content={ { folderNames: shownFolders } } />
            </div>
        </FoldersLayout>
    );
}

export default FolderDashboard;


export async function getServerSideProps( context ) {
    const session = await getSession( context );

    // this should return empty props and redirect the user to signin page
    if ( !session || !session.user ) return { props: {} }; 

    const { db } = await connectToMongoDb();
    const folders = await folder.getFolders( db, session.user.id );

    const props = { session };
    props.content = FolderDashboardContent;
    props.folders = folders;

    return { props };
}